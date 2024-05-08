import { isExpression } from "typescript";
import Author,{IAuthor} from "../models/authorModel";
import AuthorService from "../services/authorServices";
import { Request,Response } from "express";

class AuthorController{
    public async createBook(req:Request,res:Response):Promise<void>{
        try{
            const newBook:IAuthor=await AuthorService.createAuthor(req.body)
            res.status(200).json({
                status:"success",
                newBook
            })
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
    public async getAllBook(req:Request,res:Response):Promise<void>{
  
        try{
            const newBook:IAuthor[]| IAuthor=await AuthorService.gelAllAuthor()
            res.status(200).json({
                status:"success",
                newBook
            })
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
    public async updateBook(req:Request,res:Response):Promise<void>{

        try{
            const newBook:IAuthor=await AuthorService.updateAuthor(req.params.id,req.body)
            res.status(200).json({
                status:"success",
                newBook
            })
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
    public async deleteBook(req:Request,res:Response):Promise<void>{

        try{
            const newBook:any=await AuthorService.deleteAuthor(req.params.id)
            res.status(200).json({
                status:"success",
                newBook
            })
        }
        catch(err:any){
            res.status(500).json({
                message:err.message
            })
        }
    }
}


export default new AuthorController();