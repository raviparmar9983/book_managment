import jwt, { JwtPayload } from 'jsonwebtoken'

class JwtService {
    public async generator(email:string):Promise<string>{
        const token= jwt.sign({email},process.env.SECRET_KEY!,{expiresIn:900000})
        return token
    }
    public async decrpt(token:string):Promise<JwtPayload|string>{
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRET_KEY!, (err, decoded) => {
                if (err || !decoded) {
                    reject('Token is invalid or missing');
                } else {
                    resolve(decoded as JwtPayload);
                }
            });
        });
    }
}

export default new JwtService()