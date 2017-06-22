import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

export var userSchema: Schema = new Schema(
  {
    createdAt: Date,
    username: { type: String, unique: true },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    role: {
      type: String,
      enum: ['Client', 'Manager', 'Admin'],
      default: 'Client'
    }
  });

userSchema.pre('save', function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }
  if (this.isModified('password') || this.isNew){
   bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(this.password, salt, function(err, hash) {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    }); 
  }
  next();
});