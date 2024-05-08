import { NextFunction ,Request,Response} from "express";
import User, { IUser } from "../models/userModel";
import JwtService from "../utils/jwtEncrDec";
import userController from "../controller/userController";

export interface extendedReq extends Request{
    user:IUser;
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
            const user=await User.findOne({email}).select(['-__v','-password',]);
            if(email && user){
                req.user=user
                console.log(req.user);
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
    public async isUser(req:extendedReq,res:Response,next:NextFunction){
        try{
            const user:IUser=req.user;
            if(req.user && user.Role=='user'){
                next()
            }
            else{
                throw new Error('somthing went wron please login again')
            }
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
    public async isAdminOrAuthor(req:extendedReq,res:Response,next:NextFunction){
        try{
            const user:IUser=req.user;
            if(!req.user){
                throw new Error('please login again')
            }
            else if(req.user && (user.Role=='admin' || user.Role=='author')){
                next()
            }
            else{
                throw new Error('you can not acces this service');
            }
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
    
}

export default new Authenticator()