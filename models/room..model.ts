import mongoose from "mongoose";
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema({
  NumberOfBeds: {
    type: Number,
    required: true,
  },
  NumberOfBaths: {
    type: Number,
    required: true,
  },
  RoomNumber: {
    type: Number,
    required: true,
  },
  Status: {
    type: Array<String>,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Room", RoomSchema);
