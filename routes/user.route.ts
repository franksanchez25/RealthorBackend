import { Router } from "express";
import { deleteUser, getUsers, updateUserInfo } from "../controller/user.controller";
import { verifyUserToken } from "../utils/verifytoken";

const userRoutes = Router();


userRoutes.get('/', getUsers );
userRoutes.put('/update/:id',verifyUserToken, updateUserInfo)
userRoutes.delete('/delete/:id', verifyUserToken, deleteUser)


export default userRoutes; 