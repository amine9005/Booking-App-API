import express, { Request, Response } from "express";
import hotelsController from "../controllers/hotels.controller";

const router = express.Router();

router.get("/", hotelsController.getAllHotels);
router.get("/:id", hotelsController.getByID);
router.get("/add/", hotelsController.addHotel);
router.get("/getByAddress/:address", hotelsController.addHotel);

export default router;
