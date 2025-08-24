import { uploadDb } from "../db/upload.db.js";
import { getPresignedUrl } from "../storage/upload.storage.js";
import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

const uploadController = AsyncHandler(async (req, res) => {
  const fileName = req.body.fileName;
  if (!fileName) {
    throw new Apierror(400, "Filename is required");
  }
  const result = await getPresignedUrl(fileName);
  console.log(result.newFileName);
  console.log(result.response);
  if (!result.success) {
    throw new Apierror(500, "Failed to generate signature");
  }
  const responseDb = await uploadDb(fileName, result.fileLink);
  if (!responseDb.success) {
    throw new Apierror(500, "Failed to upload to DB");
  }
  res.status(200).json({
    message: "Upload Successful",
    data: result,
  });
});

export { uploadController };
