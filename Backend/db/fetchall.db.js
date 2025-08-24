import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { FILE_TABLE_NAME } from "../src/constants.js";
import { client } from "./db.js";

const fetchAll = async () => {
  try {
    let items = [];
    let lastEvaluatedKey = undefined;

    do {
      const params = {
        TableName: FILE_TABLE_NAME,
        ExclusiveStartKey: lastEvaluatedKey,
      };

      const response = await client.send(new ScanCommand(params));

      if (response.Items) {
        items = [...items, ...response.Items];
      }

      lastEvaluatedKey = response.LastEvaluatedKey;
    } while (lastEvaluatedKey);

    return items;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchAll };
