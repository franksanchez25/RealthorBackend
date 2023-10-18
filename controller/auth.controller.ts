import { Request, Response } from "express";
import User from "../model/dbModels/user";
import { compare, genSaltSync, hashSync, } from "bcrypt";
import Jwt from "jsonwebtoken";

export const signUp = async (req: Request, res: Response) => {

const {username,passwordbody,email} = req.body;

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

    res.status(500).json({
        msg:'Error in server, contact administrator'
    });

}

}


export const signIn = async (req: Request, res: Response)=> {

    const {email, passwordbody } =  req.body;
  try {

    const validUser = await User.findOne({ where: { email: email } });

    if (!validUser) {
        return res.status(400).json({
            msg:'Invalid User'
        })
    }

      const validPassword = compare(passwordbody, validUser.dataValues.password);

      if (!validPassword) {
        res.status(401).json({
            msg:'invalid credentials'
        })
       }

       const token = Jwt.sign({id: validUser.dataValues.id}, process.env.JWT_SECRET|| '');  

       const {password: password, ...rest} = validUser.dataValues;


       res.cookie('access_token',token,{httpOnly: true})
       .status(200)
       .json(rest)


    } catch (error) {
        
    }


}
