import { NextFunction, Request, Response, Router } from 'express';
import { BaseRouter } from './base';
import { Server } from '../server';

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
      newUser.save(function (err: any) {
        if (err) {
          return res.json({ success: false, message: 'That email address already exists.' });
        }
        res.json({ success: true, message: 'User successfully registered!' });
      });
    }
  }
  init() {
    this.router.post('/register/', this.Register);
  }

}