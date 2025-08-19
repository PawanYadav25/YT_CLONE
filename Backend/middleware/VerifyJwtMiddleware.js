import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


//Middleware where we are Verify the JWT token
export default function VerifyJwtToken(req,res,next){

    try {
        const token = req.headers['authorization']
        jwt.verify(token,process.env.JWT_SECRET,(err, userName)=>{
            if(err){
                return res.json({message:"token expire"})
            }
            req.userName = userName
            next();
        })

    } catch (error) {
        res.json({
            message:"Verify the token"
        })
    }
    
}