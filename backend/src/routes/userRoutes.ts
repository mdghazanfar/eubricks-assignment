import { Router } from "express";
import { userSignIn, userLogin } from "../controllers/userController";

export const userRouter: Router = Router()

userRouter.post('/user-sign-in', userSignIn)
userRouter.post('/user-log-in', userLogin)