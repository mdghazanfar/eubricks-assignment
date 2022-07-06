import { authentication } from "./authentication";
import { nameRouter } from "./routes/Router"
import { userRouter } from "./routes/userRoutes";
import { taskRouter } from "./routes/taskRoutes"
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())
app.use('/', userRouter)
app.use('/get-behaviours', nameRouter)
app.use('/task',authentication, taskRouter )

app.listen(4040, ()=> console.log("app listening on port 4040"))

mongoose.connect("mongodb+srv://mdghazanfar:Ghazanfar@cluster0.mwlugoh.mongodb.net/?retryWrites=true&w=majority"|| '', (err: any) => {
    if (err) {
      console.log('Cant connect db')
    } else {
      console.log('Connected to db')
    }
  })