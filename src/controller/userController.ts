import { IUser } from "../models/userModel";
import UserService from "../services/userService";
import { Request,Response } from "express";

class UserController{
    public async signUp(req:Request,res:Response):Promise<void>{
        try{
            const user:IUser=req.body;
            const createUser=await UserService.createUser(user);
            
            res.status(200).json({
                createUser
            })
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
    public async login(req:Request,res:Response):Promise<void>{
        try{
            const user=await UserService.login(req.body.email,req.body.password);

            if(user){
                res.status(200).json({
                    token:user
                })
            }
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
}


export default new UserController()