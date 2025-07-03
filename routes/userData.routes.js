import express from "express";
import authUser from "../middleware/userAuth.js";
import { getUserData } from "../controllers/userData.controllers.js";

const userRouter = express.Router();

userRouter.get("/data", authUser, getUserData);

export default userRouter;
