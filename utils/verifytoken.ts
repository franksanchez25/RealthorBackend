import { NextFunction, Request, Response } from "express";
import Jwt, { JwtPayload, Secret } from "jsonwebtoken";


declare global {
  namespace Express {
    interface Request {
      userId?: string; // El tipo de userId puede ser ajustado según tus necesidades
    }
  }
}
type MyToken = {
  userId: string
  iat: number
  exp: number
}



export const verifyUserToken = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.cookies.access_token;

    if (!token) {
        return  next(res.status(401).json({ msg: 'Unauthorized' }));
    }

         const verifyToken =  Jwt.verify(token,process.env.JWT_SECRET || 'NT');

         console.log((<any>verifyToken).id);

         req.userId  = (<any>verifyToken).id
        
         next();


    
};