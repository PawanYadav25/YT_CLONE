import mongoose, { Schema } from "mongoose";

const Channel_Sch = new Schema({
    Email_id : {
        type : String,
        unique : true,
        required : true
    },
    channel_image : {
        type : String,
        required : true,
        default : 'https://ik.imagekit.io/Pawan2509/Thumbnail%20Image/Cartoon.png?updatedAt=1755348164176'
    },
    Channel_person_name : {
        type : String,
        required : true
    },
    Channel_handle : {
        type : String,
        required : true
    },
    Channel_desc : {
        type : String,
        required : true
    },
    Channel_subs : {
        type : Number,
        default : 5
    }
})

const Channel = mongoose.model("Channel",Channel_Sch)

export default Channel;