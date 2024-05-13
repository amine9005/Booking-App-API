import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

const getAllHotels = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

const addHotel = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const getByID = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const getByAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

const getByZipCode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};

const removeHotel = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const editHotel = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: "success" });
};

const getByNumberOfRooms = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({ message: "success" });
};
export default {
  getAllHotels,
  addHotel,
  getByID,
  getByAddress,
  getByZipCode,
  removeHotel,
  editHotel,
  getByNumberOfRooms,
};
