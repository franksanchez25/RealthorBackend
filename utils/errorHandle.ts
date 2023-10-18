import { Request, Response, NextFunction } from "express";


export const errorHandler = (statusCode:number, errorMessage: string)=> {

    return(  req: Request, res: Response, next: NextFunction ) => {
        const error = new Error();

        error.message = errorMessage;

        res.status(statusCode).json({
            error: errorMessage,
            statusCode: statusCode
        })
        next(error);
    }


}