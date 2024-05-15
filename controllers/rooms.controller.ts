import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const getNumberOfBeds = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

const getNumberOfBathrooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

export default { getNumberOfBeds, getNumberOfBathrooms };
