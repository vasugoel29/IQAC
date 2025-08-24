import { ADMIN_TABLE_NAME } from "../src/constants.js";
import { docClient } from "./db.js";
import { GetCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const getCredentials = async () => {
  try {
    const params = {
      TableName: ADMIN_TABLE_NAME,
      Key: {
        username: process.env.ADMIN_USERNAME,
      },
    };

    const data = await docClient.send(new GetCommand(params));
    return data;
  } catch (error) {
    console.log(error);
  }
};

const setCredentials = async (newPass) => {
  try {
    const params = {
      TableName: ADMIN_TABLE_NAME,
      Key: {
        username: process.env.ADMIN_USERNAME,
      },
      UpdateExpression: "set password = :newPass",
      ExpressionAttributeValues: {
        ":newPass": newPass,
      },
    };

    const response = await docClient.send(new UpdateCommand(params));
    console.log(response);
    return response;
  } catch (error) {
    console.log("from set credentials \n",error);
  }
};

export { getCredentials, setCredentials };
