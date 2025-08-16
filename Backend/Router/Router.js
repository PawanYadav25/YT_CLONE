// import express from "express";

import { Router } from "express";
import { login } from "../Controller/user.controller.js";
import {register, inrtVd, extractVD, OneVideo} from "../Controller/user.controller.js";
import VerifyJwtToken from "../middleware/VerifyJwtMiddleware.js";
import RandomNum from "../middleware/RandomNum.js";

const userRouter = Router();

userRouter.post("/login",login)                              //Login the User and get the JWT token
userRouter.post("/register",register)                       //Register the new User
userRouter.post("/uploadVideo",RandomNum,VerifyJwtToken,inrtVd)
userRouter.get("/extractVideo",VerifyJwtToken,extractVD)
userRouter.get("/:id",VerifyJwtToken,OneVideo)

export default userRouter