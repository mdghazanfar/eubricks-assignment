import users from '../models/UserModel'
import { Request, Response } from "express";

export const getTasks = async (req: Request, res: Response) => {
    try {
        const type = req.body.type
        const oldUser = await users.findOne({username: req.body.user })
        if( oldUser == null ){
            res.send("user not found")
        } else{
                switch(type) {
                    case 'CommunicationSkills':
                        res.send({data: oldUser.CommunicationSkills })
                      break;
                    case 'HealthandHygine':
                        res.send({data: oldUser.HealthandHygine })
                      break;
                    case 'PresentationSkills':
                        res.send({data: oldUser.PresentationSkills })
                      break;
                    case 'TechnicalSkills':
                        res.send({data: oldUser.TechnicalSkills })
                      break;
                    default:
                        res.send({data: oldUser.PhysicalAppearance })
                  }
        }
    } catch (error) {
        console.error(error)
        res.status(500).send({message : "server error"})
    }
}

export const createTasks = async (req: Request, res: Response) => {
    try {
        const type = req.body.type
        const oldUser = await users.findOne({username: req.body.user })
        if( oldUser == null ){
            res.send("user not found")
        } else{
            switch(type) {
                case 'CommunicationSkills':
                    oldUser.CommunicationSkills.push(req.body.task)
                  break;
                case 'HealthandHygine':
                    oldUser.HealthandHygine.push(req.body.task)
                  break;
                case 'PresentationSkills':
                    oldUser.PresentationSkills.push(req.body.task)
                  break;
                case 'TechnicalSkills':
                    oldUser.TechnicalSkills.push(req.body.task)
                  break;
                default:
                    oldUser.PhysicalAppearance.push(req.body.task)
              }
            const x = await oldUser.save()
            res.send({message:"tasks saved"})
        }
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}

export const deleteTasks = async (req: Request, res: Response) => {
    try {
        console.log("delete")
    } catch (error) {
        console.error(error)
        res.status(500)
    }
}