import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const Authentication = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.Secret) as { userId: string; role: string };

      if (decodedToken) {
        req.body.Userid = decodedToken.userId;
        req.body.role = decodedToken.role;
        next();
      } else {
        return res.status(403).json({ msg: "You are not authorized" });
      }
    } catch (error) {
      return res.status(403).json({ msg: "Token verification failed", error });
    }
  } else {
    return res.status(401).json({ msg: "Token is required for this action. Please log in or sign up." });
  }
};

export default Authentication;
