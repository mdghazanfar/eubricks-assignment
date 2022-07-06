import { Router } from "express";
import { getTasks, createTasks, deleteTasks } from "../controllers/taskControllers";

export const taskRouter: Router = Router()

taskRouter.post('/', getTasks)
taskRouter.post('/create', createTasks)
taskRouter.delete('/', deleteTasks)