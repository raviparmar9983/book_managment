import { IfAny } from "mongoose";
import Admin,{IAdmin} from "../models/adminModel";
import JwtService from '../utils/jwtEncrDec'
import { transpileModule } from "typescript";

 class AdminService{
    public static async createAdmin(admin:IAdmin):Promise<IAdmin>{
        return await Admin.create(admin);
    }
    public static async loginAdmin(email:string,password:string):Promise<string|null>{
        const admin:IAdmin|null=await Admin.findOne({email})
        if(!admin){
            throw new Error('admin does not exist')
        }
        if(admin.password!=password){
            throw new Error('invalid password')
        }
        const token:string=await JwtService.generator(email);
        return token
    }
    public static async deleteAdmin(email:string):Promise<any>{
        return await Admin.deleteOne({email})
    }
}


export default AdminService;