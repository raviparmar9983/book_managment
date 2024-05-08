import mongoose,{Schema,Document} from "mongoose";
import validator from 'validator'

export interface IBook extends Document{
    title:string,
    author:Schema.Types.ObjectId,
    category:String,
    ISBN:string,
    description:string,
    price:number
}

const bookScehma:Schema=new mongoose.Schema<IBook>({
    title:{
        type:String,
        required:[true,'Book must Have the title'],
        unique:true,
    },
    category:{
        type:String,
        enum:{
            values:["fiction", "non-fiction", "romance", "thriller","other"],
            message:'{VALUE} is node valis Category, please choose from fiction,non-fiction,romance,thriller,other'
        },
    },
    ISBN:{
        type:String,
        required:[true,'isbnnumber must have value'],
        validate:{
            validator:function(val:string){
                return validator.isISBN(val);
            },
            message:'{VALUE} is not valid ISBN'
        }
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,'A book must have author']
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:[true,'book must have a price ']
    }
})


const Book=mongoose.model<IBook>('Book',bookScehma);

export default Book