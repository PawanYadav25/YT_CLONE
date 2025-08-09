import express from "express";
import mongoose from "mongoose";
import userRouter from "./Router/Router.js"

const app = new express;  // initialise the Express

//Connect the DB using Mongoose and also update the network to 0.0.0.0 so every one can access
mongoose.connect('mongodb+srv://pawanpy1999:p1tutdr8bO3Z2HgH@cluster0.stgwlmn.mongodb.net/ytClone').
then(()=>{
    console.log("Database connect sucessfully")
}).catch((err)=>{console.log(err)})

//MiddleWare that apply all the request to change the data into JSON
app.use(express.json());

// Defined Port on which localserver Runs
const PORT = 5000;

//Define the server with the Port
app.listen(PORT,()=>{
    console.log("Server running on Port",PORT);
})

//userRouter where all routes are present
app.use("/",userRouter);
