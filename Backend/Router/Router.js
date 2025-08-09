// import express from "express";

import { Router } from "express";
import { login } from "../Controller/user.controller.js";
import {register} from "../Controller/user.controller.js";
import VerifyJwtToken from "../middleware/VerifyJwtMiddleware.js";

const userRouter = Router();

userRouter.post("/login",login)                              //Login the User and get the JWT token
userRouter.post("/register",register)                       //Register the new User

export default userRouter