import mongoose from "mongoose";
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema({
  phoneNumber2: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Room", RoomSchema);
