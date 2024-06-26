import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly:true,
    sameSite:"strict",
    secure:process.env.DEVELOPMENT!=="development"
  });
};
export default generateTokenAndSetCookie
