import { NextFunction, Request, Response, Router } from 'express';
import { BaseRouter } from './base';

export class MapRouter extends BaseRouter {

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    super(); // TODO check this
    this.init();
  }

  /**
   * GET all maps.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
   res.json({
        message: 'getAll maps'
      });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}
