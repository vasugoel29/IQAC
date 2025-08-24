import { DeleteCommand } from "@aws-sdk/lib-dynamodb";
import { docClient } from "./db.js";
import { FILE_TABLE_NAME } from "../src/constants.js";

export const deleteFromDb = async (fileName) => {
  try {
    const params = {
      TableName: FILE_TABLE_NAME,
      Key: {
        fileName: fileName,
      },
      ReturnValues: "ALL_OLD",
    };

    const response = await docClient.send(new DeleteCommand(params));

    console.log("Delete Response:", response);

    if (!response.Attributes) {
      return { success: false, message: "File not found" };
    }

    return { success: true, deletedFile: response.Attributes };
  } catch (error) {
    console.log("Error deleting file from DB:", error);
    return { success: false, error: error.message };
  }
};
