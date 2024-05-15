import express, { Request, Response } from "express";
import roomsController from "../controllers/rooms.controller";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.status(200).json("Add Room Endpoint");
});

router.get("/bedsNumber", roomsController.getNumberOfBeds);

router.get("/bathsNumber", roomsController.getNumberOfBathrooms);

export default router;
