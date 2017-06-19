import { Schema } from "mongoose";

export var userSchema: Schema = new Schema(
    {
    createdAt: Date,
    username: { type: String, unique: true },
    password: String,
    email: { type: String, unique: true },
    role: { type: String }
    });

userSchema.pre("save", function (next) 
{
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});