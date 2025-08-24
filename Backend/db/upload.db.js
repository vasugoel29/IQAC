import { DeleteCommand, PutCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./db.js";
import { FILE_TABLE_NAME } from "../src/constants.js";

export const uploadDb = async (fileName, fileLink) => {
  try {
    console.log("started uploading to db");
    const params = {
      TableName: FILE_TABLE_NAME,
      Item: {
        fileName: fileName,
        fileLink: fileLink,
      },
    };

    console.log("created params");
    const response = await docClient.send(new PutCommand(params));

    console.log("Put Response:", response);

    return { success: true, response };
  } catch (error) {
    console.log("Error uploading file from DB:", error);
    return { success: false };
  }
};
