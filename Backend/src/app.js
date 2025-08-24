// Imports
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { loginUser, logoutUser } from "../controllers/user.controller.js";
import { fetchAllController } from "../controllers/fetchall.controller.js";
import { uploadController } from "../controllers/upload.controller.js";
import { deleteController } from "../controllers/delete.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

// Exports
export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.route("/auth/login").post(loginUser);
app.route("/auth/logout").get(logoutUser);

app.use((req, res, next) => authMiddleware(req, res, next));
app.route("/fetchall").get(fetchAllController);
app.route("/upload").post(uploadController);
app.route("/delete").post(deleteController);

// Extra Route because why not
app.get("/", (req, res) => {
  res.send("Welcome to the Express Backend!");
});
