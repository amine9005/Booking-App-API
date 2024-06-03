import express, { Request, Response } from "express";
import usersController from "../controllers/users.controller";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.status(200).json("users Endpoint");
});
router.post("/editPic", usersController.changePicture);
router.post("/editProfile", usersController.changeProfileInfo);
router.post("/Saved", usersController.changeProfileInfo);
router.post("/reserved", usersController.changeProfileInfo);
router.post("/cancelReservation", usersController.cancelReservation);

export default router;
