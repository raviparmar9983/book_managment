import mongoose,{Schema,Document} from "mongoose";


export interface IUser extends Document{
    name:string,
    email:string,
    password:string
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
        required:[true,';passwrod is required']
    }
})

const  User=mongoose.model<IUser>("User",userShema)

export default User