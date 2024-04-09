import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save()
    // await newMessage.save()
    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);

    const receiverSocketId=getReceiverSocketId(receiverId);
    if(receiverSocketId){
      io.to(receiverSocketId).emit('newMessage',newMessage)
    }


    res.status(201).json(newMessage);
  } catch (err) {
    console.log("Error sendMessage Controller", err);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    // If not any conversation between them return empty Array value, so don't need to run remaining code.So "return" is important
    if(!conversation){
      return res.status(200).json([])
    }

    const messages=conversation.messages||[]

    res.status(200).json(messages)
  } catch (err) {
    console.log("Error sendMessage Controller", err.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};
