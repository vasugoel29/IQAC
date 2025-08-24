import { fetchAll } from "../db/fetchall.db.js";
import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

const fetchAllController = AsyncHandler(async (req, res) => {
  const data = await fetchAll();
  if (data.length > 0) {
    console.log(data);
    res.status(200).json({
      message: "Fetch All",
      data: data,
    });
  } else {
    throw new Apierror(400, "Table is Empty");
  }
});

export { fetchAllController };
