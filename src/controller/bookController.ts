import Book, { IBook } from "../models/bookModel";
import BookService from "../services/bookService";
import { Request,Response } from "express";


 class BookController{
 
    public async createBook(req:Request,res:Response):Promise<void>{
        try{
            
            const newBook:IBook=await  BookService.createBook(req.body)
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
            const queryString=req.query
            const newBook:IBook|IBook[]= await BookService.gelAllBook(queryString)
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
            const newBook:IBook= await BookService.updateBook(req.params.id,req.body)
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
            const newBook:any= await BookService.deleteBook(req.params.id)
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

export default new BookController()