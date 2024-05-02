import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.status(200).json("Add Room Endpoint");
});

export default router;
