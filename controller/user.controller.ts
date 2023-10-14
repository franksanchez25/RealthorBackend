
import { Request, Response } from "express";


export const getUsers = (req: Request, res: Response)=> {
  
    res.json({
        msg:'GetUser'
    })

}

export const getUserByID = (req: Request, res: Response)=> {

    const {id} = req.params; 
    res.json({
        msg:'GetUser',
        id: id
    });
}

export const postUser = (req: Request, res: Response) => {

    const body = req.body;

    res.json({
        msg: 'Post User',
         body
    })
}

export const putUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({

        msg: 'Put User',
        id: id



    })

}
