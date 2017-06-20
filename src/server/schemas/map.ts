import { Schema } from 'mongoose';

export var mapSchema: Schema = new Schema(
    {
    createdAt: Date,
    name: { type: String, unique: true },
    });

mapSchema.pre('save', function (next) 
{
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  next();
});