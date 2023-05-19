import { Schema, model } from "mongoose";

const User = new Schema(
  {
    username: { type: String, lowercase: true, trim: true },
    email: { type: String, lowercase: true, trim: true },
    password: String,
    role: Number,
  },
  {
    timestamps: true,
  }
);

export default model("User", User);
