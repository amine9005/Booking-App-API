import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json("Auth Endpoint");
});

router.get("/register", (req: Request, res: Response) => {
  res.status(200).json("register Endpoint");
});
export default router;
