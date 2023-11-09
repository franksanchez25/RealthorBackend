import { NextFunction, Request, Response } from "express";
import Listing from "../model/dbModels/listing";




export const createListing = async (req: Request, res:  Response, next: NextFunction) => {

    try {

        const listing = await Listing.create(req.body);

        (await listing).save();

         return res.status(201).json(listing.dataValues);


    } catch (error) {

        next(error);
    
    }


}