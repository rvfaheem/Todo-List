import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRouter from './routes/user.js'


const app=express()

app.use(cors())
app.use(express.json())
app.use('/user',userRouter)


mongoose.connect('mongodb://localhost:27017/Todolist')
.then(()=> console.log('connected!'));


app.listen(4000,()=>{
    console.log("Server is Running")
})

