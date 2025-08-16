import express from "express";
import user from "../Model/User_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Video from "../Model/video_model.js";
import dotenv from "dotenv";
dotenv.config();

const Salt = 10;  //for Hashing the password with salt


export const register = async (req,res)=>{                  //Registration for new user
    const {userName : UserNM, Email_id : emal, password: pswd} = req.body;   
    const data = await user.findOne({userName:UserNM})      //Find if same UserName is present or not 
    try {
        if(!data){                                                      // if same userName is not present then proceed the request
        const enpswd = await bcrypt.hash(pswd, Salt )                   // Hashing the pswd before data entry
        await user.insertOne({userName:UserNM,Email_id:emal, password:enpswd})        // insert the value in User collection
        return res.json({message : 'Success'})   //Successfull insert Respond
    }
    res.status(200)                                              
    res.json({message : 'duplicate'})                //if UserName is already present send the msg for login
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
    
}

export const login = async (req,res)=>{                                 //Login controller
    const {Email_id : UserNM, password: pswd} = req.body;
    const data = await user.findOne({Email_id:UserNM})      //Find the userName is present or not
    if(!data){
        return res.json({message : 'Not Register'})  //If userName is not present as for Registration
    }
    const enpswd = await bcrypt.compare(pswd, data.password)  //If UserName present verify the Hashed pswd

    //If pswd is not correct send the password incorrect message
    if(!enpswd){
        return res.json({
            message : "Email and Pswd"
        })
    }
    var token = jwt.sign({userName: UserNM, },process.env.JWT_SECRET,{expiresIn:"1h"});   //if all verification done and passed, create JWT token using Username
    res.status(200)
    res.json({userName:`${data.userName}`,generatedToken:token, message:'success'}); //send Response with TOken
    
}


export const inrtVd = async (req,res)=>{
    const {channel_Name,channel_image,channel_subscriber,thumbnail_image,video_link,video_title,description,Video_category} = req.body
    const videoId = req.randomNumber ;
    try {
        await Video.insertOne({Video_id:videoId,channel_Name,channel_image,channel_subscriber,thumbnail_image,video_link,video_title,description,Video_category})
        res.json({Message : "Entry has been successfull"})
    } catch (error) {
        res.send(error)
    }
    
}


export const extractVD = async (req,res)=>{
    const data = await Video.find()
    res.json({data : data, message:'success'})
}


export const OneVideo = async (req,res)=>{      
    const Fid = req.params.id;
    const data = await Video.findOne({Video_id:Fid});   
    if(!data){
        return res.status(404).json({message:'Video is not Available'})
    }
    res.json({data : data, message:'success'})
}