
import { Request, Response } from "express";


export const getUsers = (req: Request, res: Response)=> {

    res.json({
        msg:'GetUser'
    })
}

export const getUser = (req: Request, res: Response)=> {

    const {id} = req.params; 
    res.json({
        msg:'GetUser',
        id: id
    })

    
}

