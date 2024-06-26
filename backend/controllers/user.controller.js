import User from "../models/user.model.js";

export const getUserForSidebar =async (req, res) => {
  try {
    const loggedInUserId=req.user._id
    const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password")

    res.status(200).json(filteredUsers)
  } catch (err) {
    console.log("Error getUserForSidebar Controller", err.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};
