import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


//Middleware where we are Verify the JWT token
export default function VerifyJwtToken(req,res,next){

    try {
        const tkheader = req.headers['authorization']
        const token = tkheader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET,(err, userName)=>{
            if(err){
                return res.status(403).json({message:"token is not valid, Kindly login again"})
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