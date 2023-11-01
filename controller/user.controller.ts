
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
        res.status(401).json({ msg:`You can only update your account`,
        })}

        const salt = genSaltSync(10);

      try {
        if (body.password) {
            body.password = hashSync(body.password, salt);
        }

        const user = await User.findByPk(id);

         if (!user) { return res.status(404).json({msg:'No user found'})}
       
        await user?.update(body);

        const {password: password, ...rest} = user?.dataValues;

       return res.status(200).json(user);

      } catch (error) {
        next(res.json(error));
      }  
}


export const deleteUser = async (req: Request, res:Response, next: NextFunction)=> {

  enum userState {
  Active = 1,
  Disable = 0,
}

const { id } = req.params;

if (req.userId != id) {
  return next(res.status(401).json({ msg:`You can only update your account `}))
}

  try {

        const user = await User.findByPk(id);

         if (!user) {  next(res.status(404).json({msg:'No user found'}))}
       
         console.log(userState.Disable)
        await user?.update({status:userState.Disable});

         res.clearCookie('access_token',{path:'/'});
         
         res.status(200).json({msg: 'User deleted'})
    
  } catch (error) {
      next(res.json(error));
  }


}