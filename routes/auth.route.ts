
import { Router } from "express";
import { signIn, signUp } from "../controller/auth.controller";
import { body, check } from "express-validator";
import { validateField } from "../middlewares/validateField";



const authRouter = Router();


authRouter.post('/signup',[
check('username','username Required').not().isEmpty(),
check('email','must be a valid Email').isEmail()
],
validateField, 
signUp)

authRouter.post('/signin',[
    check('passwordbody','password Required').not().isEmpty(),
    check('email','must be a valid Email').isEmail()
],
validateField,
signIn
)


export default authRouter;