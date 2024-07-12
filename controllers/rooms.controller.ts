import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const getRooms = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const addRoom = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

export default { getRooms, addRoom };
