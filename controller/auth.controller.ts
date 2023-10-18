import { NextFunction, Request, Response } from "express";
import User from "../model/dbModels/user";
import { genSaltSync, hashSync } from "bcrypt";
import { errorHandler } from "../utils/errorHandle";


export const  signUp = async (req: Request, res: Response, next:NextFunction) => {

const {username,passwordbody,email} = req.body;

console.log(username, passwordbody, email)
  

try {

    const mailExist = await User.findOne({ where: { email: email } });

    if (mailExist) {

        return res.status(400).json({
            error:'Email in use by another user'
        })
        
    }
  
    const salt = genSaltSync(10);
   const password = hashSync( passwordbody,salt );
   const newUser =  User.build({username,email,password});

   await newUser.save();

   res.status(201).json({
    msg: 'user created successfully'
   });
    
} catch (error) {

    console.log(error)
    res.status(500).json({
        msg:'Error in server, contact administrator'
    });

}

}
