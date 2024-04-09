import { Server } from "socket.io";
import http from 'http'
import express from 'express'
import { log } from "console";


const app=express()

const server=http.createServer(app)

const io=new Server(server,{
    cors:{
        origin:'*',
        methods:['GET','POST']
    }
})
const userSocketMap={}

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId]
}



io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);
    const userId=socket.handshake.query.userId;
    // console.log("userId:",userId);
    if(userId!='undefined'){
        userSocketMap[userId]=socket.id
    }
    // console.log(userSocketMap);
    io.emit('getOnlineUsers',Object.keys(userSocketMap))
    socket.on('disconnect',()=>{
        console.log('user disconnected',socket.id);
        delete userSocketMap[userId]
        io.emit('getOnlineUsers',Object.keys(userSocketMap))
    })
})

export {app,io,server}