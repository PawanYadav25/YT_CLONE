import mongoose from "mongoose";
import { Schema } from "mongoose";

//User model where after registration, userName and pswd store in this format
const userName = new Schema({
    userName : {
        type: String,
        unique: true,
        required: true
    },
    Email_id : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        unique: true,
        required: true
    },
    channel : {
        type : String,
        default : "none"
    }
})


const user = mongoose.model('user', userName);

export default user;