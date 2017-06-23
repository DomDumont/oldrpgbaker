import { NextFunction, Request, Response, Router } from 'express';
import { BaseRouter } from './base';
import { Server } from '../server';
import { IUserModel } from '../models/user';
import * as jwt from 'jsonwebtoken';

export class UserRouter extends BaseRouter {

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    super(); // TODO check this
    this.init();
  }

  public Register(req: Request, res: Response) {
    if (!req.body.email || !req.body.password) {
      res.json({ success: false, message: 'Please enter email and password.' });
    } else {
      let tempModel = Server.getInstance().models.user;
      let newUser = new tempModel({
        email: req.body.email,
        password: req.body.password
      });

      // Attempt to save the user
      newUser.save(function (err: {}) {
        if (err) {
          return res.json({ success: false, message: 'That email address already exists.' });
        }
        res.json({ success: true, message: 'User successfully registered!' });
      });
    }
  }

  public Authenticate(req: Request, res: Response) {
    Server.getInstance().models.user.findOne({
      email: req.body.email
    }, function (err: any, user: any) {
      if (err) {
        throw err;
      }

      if (!user) {
        res.send({ success: false, message: 'Authentication failed. User not found.' });
      } else {
        // Check if password matches
        user.comparePassword(req.body.password, function (err2: Error, isMatch: Boolean) {
          if (isMatch && !err2) {
            // Create token if the password matched and no error was thrown
            var token = jwt.sign(user, 'config.secret', {
              expiresIn: 10080 // in seconds
            });
            res.json({ success: true, token: 'JWT ' + token });

          } else {
            res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
          }
        });
      }
    });
  }

  init() {
    this.router.post('/register/', this.Register);
    this.router.post('/authenticate/', this.Authenticate);
  }

}