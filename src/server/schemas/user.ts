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
   bcrypt.genSalt(10, function (err: Error, salt: string) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(this.password, salt, function(err2: Error, hash: string) {
        if (err2) {
          return next(err2);
        }
        this.password = hash;
        next();
      });
    }); 
  }
  next();
});

// Create method to compare password input to password saved in database
userSchema.comparePassword = function(pw: any, cb: any) {  
  bcrypt.compare(pw, this.password, function(err: Error, isMatch: Boolean) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};