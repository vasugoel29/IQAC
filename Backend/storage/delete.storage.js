import {
  DeleteObjectCommand,
  waitUntilObjectNotExists,
} from "@aws-sdk/client-s3";
import { s3 } from "./upload.storage.js";

export const deleteFromStorage = async (filename) => {
  try {
    const response = await s3.send(
      new DeleteObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: filename,
      })
    );

    return { response, success: true };
  } catch (error) {
    console.error("S3 delete Error:", error);
    return { success: false };
  }
};
