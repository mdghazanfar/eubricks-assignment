import { Router } from "express";
import { getNames } from "../controllers/behaviourController";

export const nameRouter: Router = Router()

nameRouter.get('/', getNames)