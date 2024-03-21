import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password not match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "user already exits", user: user });
    }
    const boysProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlsProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender == "male" ? boysProfilePic : girlsProfilePic,
    });
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    console.log("Error Signup Controller", err.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isCorrectPassword = await bcrypt.compare(password, user?.password||"" );

    if (!user || !isCorrectPassword) {
      return res.status(400).json({ error: "Invalid User Name and Password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (err) {
    console.log("Error login Controller", err.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try{
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({message:"logged out successfully"})
  }catch(err){
    console.log("Error logout Controller", err.message);
    res.status(400).json({ error: "Internal Server Error" });
  }
};
