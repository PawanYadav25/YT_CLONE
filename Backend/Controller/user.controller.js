import express from "express";
import user from "../Model/User_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Video from "../Model/video_model.js";

const Salt = 10;  //for Hashing the password with salt


export const register = async (req,res)=>{                  //Registration for new user
    const {userName : UserNM, Email_id : emal, password: pswd} = req.body;   
    const data = await user.findOne({userName:UserNM})      //Find if same UserName is present or not 
    try {
        if(!data){                                                      // if same userName is not present then proceed the request
        const enpswd = await bcrypt.hash(pswd, Salt )                   // Hashing the pswd before data entry
        await user.insertOne({userName:UserNM,Email_id:emal, password:enpswd})        // insert the value in User collection
        return res.json({message : "User Registered Succesfully, Kindly login and order your favourite items"})   //Successfull insert Respond
    }
    res.status(200)                                              
    res.send(`${UserNM} already present, Kindly Login`)                 //if UserName is already present send the msg for login
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
    
}

export const login = async (req,res)=>{                                 //Login controller
    const {userName : UserNM, password: pswd} = req.body;
    const data = await user.findOne({userName:UserNM})      //Find the userName is present or not
    if(!data){
        return res.status(404).json({message : 'User not registered or check your User Name'})  //If userName is not present as for Registration
    }
    const enpswd = await bcrypt.compare(pswd, data.password)  //If UserName present verify the Hashed pswd

    //If pswd is not correct send the password incorrect message
    if(!enpswd){
        return res.status(401).json({
            message : "password is not correct"
        })
    }
    var token = jwt.sign({userName: UserNM}, 'air',{expiresIn:"10m"});   //if all verification done and passed, create JWT token using Username
    res.status(200)
    res.json({"message":`password Matched`,generatedToken:token}); //send Response with TOken
    
}


export const inrtVd = async (req,res)=>{
    const {Video_id,channel_Name,channel_image,channel_subscriber,thumbnail_image,video_link,video_title,description} = req.body
    try {
        await Video.insertOne({Video_id,channel_Name,channel_image,channel_subscriber,thumbnail_image,video_link,video_title,description})
        res.json({Message : "Entry has been successfull"})
    } catch (error) {
        res.send(error)
    }
    
}


export const extractVD = async (req,res)=>{
    const data = await Video.find()
    res.send(data)
}