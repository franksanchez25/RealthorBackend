import { NextFunction, Request, Response } from "express";

const { validationResult } = require('express-validator');




export const validateField = (req:Request, res:Response, next: NextFunction) => {

     const error = validationResult( req );
    
    console.log(error);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error
        });
    }

    next();

}

