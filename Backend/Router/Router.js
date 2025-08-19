// import express from "express";

import { Router } from "express";
import { login } from "../Controller/user.controller.js";
import {register, inrtVd, extractVD, OneVideo,LikeCount,AddComment,Chnlcret,fetchCHNL} from "../Controller/user.controller.js";
import VerifyJwtToken from "../middleware/VerifyJwtMiddleware.js";
import RandomNum from "../middleware/RandomNum.js";

const userRouter = Router();

userRouter.post("/login",login)                              //Login the User and get the JWT token
userRouter.post("/register",register)                       //Register the new User
userRouter.get("/fetchchannel",VerifyJwtToken,fetchCHNL)
userRouter.post("/uploadVideo",RandomNum,VerifyJwtToken,inrtVd)
userRouter.get("/extractVideo",VerifyJwtToken,extractVD)
userRouter.get("/:id",VerifyJwtToken,OneVideo)
userRouter.put("/:id/like",VerifyJwtToken,LikeCount)
userRouter.put("/:id/comment",VerifyJwtToken,AddComment)
userRouter.post("/createChannel",VerifyJwtToken,Chnlcret)



export default userRouter