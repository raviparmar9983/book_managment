import User,{IUser} from "../models/userModel";
import JwtService from '../utils/jwtEncrDec'

export default class UserService{
 
    public static async createUser(user:IUser):Promise<IUser>{
        return await User.create(user);
    }
    public static async login(email:string,password:string):Promise<string>{
        const user:IUser|null= await User.findOne({email}).select('+password');

        if(!user){
            throw new Error('user not exist');
        }
        if (user.password!=password){
            throw new Error('password is incorrect')
        }
        const tokenn:string=await JwtService.generator(email);
        return tokenn
    }

}