import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
dotenv.config();
const secret = process.env.JWT_SECRET_KEY;
export const authMiddleware = async (req, res, next) => {
  try {
    console.log("Here auth");
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Please Authentication token" });
    }

    const decoded = await jwt.verify(token, secret);

    if (!decoded) {
      return res.status(401).json({ message: "Please Authentication decoded" });
    }
    // find user in the database
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "Please Authentication user" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error.name, error.message);
    return res.status(401).json({ message: "Please Authentication error" });
  }
};
