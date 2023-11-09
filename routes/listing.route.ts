import { Router } from "express";
import { createListing } from "../controller/listing.controller";
import { verifyUserToken } from "../utils/verifytoken";



const listingRouter = Router();


listingRouter.post('/create',verifyUserToken ,createListing);    



export default listingRouter;