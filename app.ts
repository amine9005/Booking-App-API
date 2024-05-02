import express, { Application } from "express";
import HotelRouter from "./Routes/hotels.router";
import AuthRouter from "./Routes/auth.router";
import UsersRouter from "./Routes/users.router";
import RoomsRouter from "./Routes/rooms.router";

function createServer() {
  const app: Application = express();

  app.use("/hotels", HotelRouter);
  app.use("/auth", AuthRouter);
  app.use("/users", UsersRouter);
  app.use("/rooms", RoomsRouter);

  app.use("*", (req, res) => {
    res.status(404).json({
      error: "404 Route Not Found",
    });
  });

  return app;
}

export default createServer;
