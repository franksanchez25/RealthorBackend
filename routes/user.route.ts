import { Router } from "express";
import { getUsers, updateUserInfo } from "../controller/user.controller";
import { verifyUserToken } from "../utils/verifytoken";

const userRoutes = Router();


userRoutes.get('/', getUsers );
userRoutes.put('/update/:id',verifyUserToken, updateUserInfo)


export default userRoutes; 