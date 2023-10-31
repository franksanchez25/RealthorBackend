
import { NextFunction, Request, Response } from "express";
import {  genSaltSync, hashSync } from "bcrypt";
import User from "../model/dbModels/user";

export const getUsers = (req: Request, res: Response)=> {
  
    res.json({
        msg:'GetUser'
    })

}


export const updateUserInfo = async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;
    const {body} = req;
    if (req.userId != id) {  
        res.status(401).json({ msg:`You can only update your account: id-token :${req.userId} : id-req:${id}`,
        })}

        const salt = genSaltSync(10);
      try {


        if (body.password) {
            body.password = hashSync(body.password, salt);
        }

        const user = await User.findByPk(id);

         if (!user) { res.status(404).json({msg:'No user found'})}
       
        await user?.update(body);

        const {password: password, ...rest} = user?.dataValues;

        res.status(200).json(user);
         


      } catch (error) {
        next(res.json(error));
      }  



}
