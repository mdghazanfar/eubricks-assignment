import { Request, Response } from "express";
import users from '../models/UserModel'
import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'
const secret = 'azdrfnioe154998wsajbhhidcgiydg5d897c4shvgsggss4514'

export const userSignIn = async (req: Request, res: Response) => {
    const oldUser = await users.findOne({ username: req.body.username })
    if (oldUser === undefined || oldUser === null) {
        try {
            const salt = await bcrypt.genSalt() 
            const hashedPassword = await bcrypt.hash(req.body.password, salt)
            const NewUser = new users({
                username: req.body.username,
                password: hashedPassword,
                HealthandHygine:[],
                CommunicationSkills:[],
                PresentationSkills:[],
                TechnicalSkills:[],
                PhysicalAppearance:[],
            })
            await NewUser.save()
            res.send({message: "new user created"}).status(200)
        } catch (error) {
            console.error(error)
            res.status(500)
        }
    } else {
        res.send({message: 'user already exists'})
    }
}

export const userLogin = async (req: Request, res: Response) => {

    const oldUser = await users.findOne({ username: req.body.username })
    if (oldUser === undefined || oldUser === null) {
        res.status(400).send({ message: "user does not exist, please register" })
    } else {
        try {
            if (await bcrypt.compare(req.body.password, oldUser.password)) {
                const accessToken = jwt.sign(req.body.username, secret)
                res.status(200).json({ message: "welcome user", token: accessToken })
            } else {
                res.status(401).send({ message: "wrong password" })
            }
        } catch (error) {
            console.error(error)
            res.status(500)
        }
    }

}