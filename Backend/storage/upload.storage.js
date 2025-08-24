import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const getPresignedUrl = async (filename) => {
  try {
    const newFileName = Date.now() + filename + ".pdf";
    const params = new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: newFileName,
      ContentType: "application/pdf",
    });

    const response = await getSignedUrl(s3, params, { expiresIn: 600 });
    const fileLink = `https://${process.env.BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${newFileName}`;
    return { response, fileLink, success: true };
  } catch (error) {
    console.error("S3 Upload Error:", error);
    return { success: false };
  }
};
