import mongoose from "mongoose";
import { Schema } from "mongoose";


//Schema which insert in cart under this we use User_Name and cart - User Name define which user that cart belonging.
const Cart_Schema = new Schema({
    UserName : {
        type: String,
        unique: true,
        required: true
    },
    Cart : Array
})


let Cart = mongoose.model('Cart', Cart_Schema);

export default Cart;