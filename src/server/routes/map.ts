import { NextFunction, Request, Response, Router } from 'express';
import { BaseRouter } from './base';
import { Server} from '../server';

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
    // Query the DB and if no errors, send all the maps
    let query = Server.getInstance().models.map.find({});
    query.exec((err, maps) => {
      if (err) {
        res.send(err);
      }
      // If no errors, send them back to the client
      res.json(maps);
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
