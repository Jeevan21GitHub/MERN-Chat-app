import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import { connectToMongoDB } from './dp/connectToMongoDB.js'
import cookieParser from 'cookie-parser'
import { app, server } from './socket/socket.js'

dotenv.config()

const PORT=process.env.PORT||5000



app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send("Hi")
})

server.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
    connectToMongoDB();
})