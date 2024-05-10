import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const login = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const logout = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const register = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const refresh = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};
export default { login, logout, register, refresh };
