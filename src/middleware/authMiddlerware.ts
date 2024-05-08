import { NextFunction ,Request,Response} from "express";
import User from "../models/userModel";
import JwtService from "../utils/jwtEncrDec";

export interface extendedReq extends Request{
    userId:string;
}
 class Authenticator{
    public async authenticate(req:extendedReq,res:Response,next:NextFunction){
        try{
            const token:string|undefined=req.headers.authorization?.split(' ')[1];
            if(!token){
                throw new Error('invalid token please login again')
            }
            const payload=await JwtService.decrpt(token);
            const email=(payload as any).email
            if(email && await User.findOne({email})){
                req.userId=email;
                next()
            }
            else  throw new Error('invalid token please login again')
        }
        catch(err:any){
            res.json({
                message:err.message
            })
        }
    }   
}

export default new Authenticator()