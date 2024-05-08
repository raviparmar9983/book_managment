import {Request,Response} from 'express'
import AdminService from '../services/adminService'
import { IAuthor } from '../models/authorModel'
import { IAdmin } from '../models/adminModel';

class AdminController{
    public async createAuthor(req:Request,res:Response):Promise<void>{
        try{
            const admin:IAdmin=req.body;
            const created:IAdmin=await AdminService.createAdmin(admin);
            res.status(200).json(
                {
                    created
                }
            )
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
    public async loginAdmin(req:Request,res:Response):Promise<void>{
        try{
           const email:string=req.body.email;
           const password:string=req.body.password;
           const token:null|string=await AdminService.loginAdmin(email,password);
           if(!token){
            throw new Error('token is not valid')
           }
           res.status(200).json({
            token:token
           })
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
}

export default new AdminController()