import express, { Request, Response } from "express";
import hotelsController from "../controllers/hotels.controller";

const router = express.Router();

router.get("/", hotelsController.getAllHotels);
router.get("/:id", hotelsController.getByID);
router.get("/add/", hotelsController.addHotel);
router.get("/getByAddress/:address", hotelsController.getByAddress);
router.get("/getByZipCode/:zipCode", hotelsController.getByZipCode);
router.get("/remove/:id", hotelsController.removeHotel);
router.get("/edit/:id", hotelsController.editHotel);

export default router;
