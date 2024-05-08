import Author,{IAuthor} from "../models/authorModel";


 class AuthorService{
    public static async  createAuthor(author:IAuthor):Promise<IAuthor>{
        return await Author.create(author);
    }
    public static async gelAllAuthor():Promise<IAuthor|IAuthor[]>{
        return await Author.find()
    }
    public static async updateAuthor(id:string,author:IAuthor):Promise<IAuthor>{
        return await Author.findByIdAndUpdate(id,author,{new:true,upsert:true});
    }
    public static async deleteAuthor(id:string):Promise<any>{
        return await Author.deleteOne({_id:id})
    }
}


export default AuthorService;