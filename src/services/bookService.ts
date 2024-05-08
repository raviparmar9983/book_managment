import Book,{IBook} from "../models/bookModel";
import ApiFeatures from "../utils/ApiFeatures";

export default class BookService{
    
    public static async createBook(book:IBook):Promise<IBook>{
        return await Book.create(book);
    }
    public static async gelAllBook(str:any):Promise<any>{
        const book=new ApiFeatures(Book.find(),str).fillter().sort().paging().search()
        return await book.query
    }
    public static async updateBook(id:string,book:IBook):Promise<IBook>{
        return await Book.findByIdAndUpdate(id,book,{new:true,upsert:true});
    }
    public static async deleteBook(id:string):Promise<any>{
        return await Book.deleteOne({_id:id})
    }

}