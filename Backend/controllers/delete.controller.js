import { deleteFromDb } from "../db/delete.db.js";
import { deleteFromStorage } from "../storage/delete.storage.js";
import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

const deleteController = AsyncHandler(async (req, res) => {
  const fileName = req.body.fileName;
  if (!fileName) {
    throw new Apierror(400, "File name is required");
  }
  const findFileResult = await deleteFromDb(fileName);
  if (!findFileResult.success) {
    throw new Apierror(400, "File not found");
  }

  const s3FileName = findFileResult.deletedFile.fileLink.split("/").pop();

  const deleteFileResult = await deleteFromStorage(s3FileName);
  if (!deleteFileResult.success) {
    throw new Apierror(400, "Something went wrong while deleting the file");
  }
  res.status(200).json({
    message: "File deleted successfully",
    success: true,
    findFileResult,
    deleteFileResult,
  });
});

export { deleteController };
