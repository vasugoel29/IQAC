import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { Apierror } from "../utils/Apierror.js";
import { getCredentials, setCredentials } from "../db/credentials.db.js";
import { setToken } from "../utils/session.util.js";

const loginUser = AsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new Apierror(400, "Username and password are required");
  }

  if (process.env.ADMIN_USERNAME && process.env.ADMIN_USERNAME != username) {
    throw new Apierror(400, "Invalid admin credentials");
  }

  const data = await getCredentials();

  if (data.Item.password == "") {
    //   set new password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    setCredentials(hash);
  } else {
    //   check password
    const isMatch = await bcrypt.compare(password, data.Item.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
  }

  // set token and login
  const token = jwt.sign({ loginTime: Date.now() }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });

  setToken(token);

  res.cookie("utoken", token, {
    httpOnly: true,
    maxAge: 30 * 60 * 1000,
  });

  res.status(200).json({
    message: "Login successful",
  });
});

const logoutUser = AsyncHandler((req, res) => {
  res.clearCookie("utoken");
  setToken("");
  res.status(200).json({ message: "Logout successful" });
});

export { loginUser, logoutUser };
