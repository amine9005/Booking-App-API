import express, { Request, Response } from "express";
import authController from "../controllers/auth.controller";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json("Auth Endpoint");
});

router.get("/register", authController.register);
router.get("/login", authController.login);
router.get("/logout", authController.logout);
export default router;
