import mongoose,{Schema,Document} from "mongoose";


export interface IUser extends Document{
    name:string,
    email:string,
    password:string,
    Role?:string,   
}



const userShema:Schema=new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,';passwrod is required'],
        select:false
    },
    Role:{
        type:String,
        enum:{
            values:['admin','user','author'],
            message:'please select from user, admin or author'
        },
        default:'user'
    }
})



const  User=mongoose.model<IUser>("User",userShema)

export default User