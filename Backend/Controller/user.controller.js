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
    const data = await Video.find()
    const fdata = data.filter(dt=>dt.Video_id==Fid)
    if(fdata.length < 1){
        return res.json({message:'No Video'})
    }
    const {video_link,video_title,channel_image,channel_Name,like,dislike,comment,description} = fdata[0]
    res.json({data : [{video_link,video_title,channel_image,channel_Name,like,dislike,comment,description}], message:'success'})
}




export const LikeCount = async (req,res)=>{      //increase the Product count
    const user = req.userName['userName'];      //Once the token is veified , we get the userName from the token
    const pid = req.params.id;                     //get the product id which count need to be update
    try {
        await Video.updateOne({Video_id:pid}, { $inc:{"like":1}})    //increase the count if product is present
        res.json({message: 'Like incereased'}) 

    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

export const AddComment = async (req,res)=>{      //increase the Product count
    const {user,message} = req.body;
    const pid = req.params.id;                     //get the product id which count need to be update
    try {
        await Video.updateOne({ Video_id: pid },{$push:{comment:{$each:[{user, message}],$position: 0}}});
        res.json({message : 'Comment added succesfully'}) 

    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}