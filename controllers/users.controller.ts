import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const changePicture = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

const changeProfileInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

const getSavedHotels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

export default { changePicture, changeProfileInfo, getSavedHotels };
