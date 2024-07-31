import express, { Request, Response } from "express";
import roomsController from "../controllers/rooms.controller";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.status(200).json("Add Room Endpoint");
});

router.get("/rooms", roomsController.getRooms);
router.put("/edit/:id", roomsController.editRoom);
router.delete("/remove/:id", roomsController.removeRoom);
router.post("/add", roomsController.addRoom);
router.post("/getById/:id", roomsController.getRoomByID);
router.post("/getByStatus/:status", roomsController.getRoomByStatus);

export default router;
