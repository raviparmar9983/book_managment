import mongoose,{Schema,Document} from "mongoose";

export interface IAdmin extends Document{
    name:string,
    email:string,
    password:string
}

const adminSchema:Schema=new mongoose.Schema<IAdmin>({
    name:{
        type:String,
        required:[true,'admin name requied'],
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
})


const Admin=mongoose.model<IAdmin>('Admin',adminSchema);

export default Admin