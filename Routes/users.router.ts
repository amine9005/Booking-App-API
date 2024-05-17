import express, { Request, Response } from "express";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.status(200).json("users Endpoint");
});
router.post("/", (req: Request, res: Response) => {
  res.status(200).json("users Endpoint");
});

export default router;
