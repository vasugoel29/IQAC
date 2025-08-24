import { Apierror } from "../utils/Apierror.js";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { getToken } from "../utils/session.util.js";

export const authMiddleware = AsyncHandler(async (req, res, next) => {
  const utoken = req.cookies.utoken;

  if (!utoken) {
    throw new Apierror(403, "Please Login to continue.");
  }

  if (utoken != getToken()) {
    res.clearCookie("utoken");
    throw new Apierror(403, "Invalid Token");
  }

  next();
});
