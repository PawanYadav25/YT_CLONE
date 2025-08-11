import mongoose from "mongoose";
import { Schema } from "mongoose";


//Schema which insert a video with All detail
const Video_Schema = new Schema({
    Video_id : {
        type : Number,
        required : true,
        unique : true
    },
	channel_Name : {
        type : String,
        required : true
    },
	channel_image : {
        type : String,
        required : true
    },
	channel_subscriber : {
        type : String,
        required : true
    },
	thumbnail_image : {
        type : String,
        required : true
    },
	video_link : {
        type : String,
        required : true
    },
	video_title : {
        type : String,
        required : true
    },
	description : {
        type : String,
        required : true
    },
	Views : {
        type : Number,
        default: 123456
    },
	like : {
        type : Number,
        default : 0
    },
	dislike : {
        type : Number,
        default : 0
    },
	comment : []
})


let Video = mongoose.model('Video', Video_Schema);

export default Video;