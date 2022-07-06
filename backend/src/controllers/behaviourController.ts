import behaviours from "../models/BehaviourModel";
import { Request, Response } from "express";

export const getNames = async (req: Request, res: Response) => {
    try {
        const behaviour = await behaviours.find()
        res.send({ data: behaviour, message: "fetch successful" }).status(200)
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}