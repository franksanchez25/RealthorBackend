import { Router } from "express";
import { getUsers } from "../controller/user.controller";

const userRoutes = Router();


userRoutes.get('/', getUsers );
console.log('getuser')


export default userRoutes; 