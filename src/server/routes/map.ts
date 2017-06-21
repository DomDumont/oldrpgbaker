import { NextFunction, Request, Response, Router } from 'express';
import { BaseRouter } from './base';
import { Server } from '../server';

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

  public postOne(req: Request, res: Response) {
    // Creates a new map
    let tempModel = Server.getInstance().models.map;
    let map = new tempModel(req.body);
    // Save it into the DB.
    map.save((err, maps) => {
      if (err) {
        res.send(err);
      } else {
        // If no errors, send it back to the client
        res.json({ message: 'Map successfully added!', map });
      }
    });
  }
  public getOne(req: Request, res: Response) {
    Server.getInstance().models.map.findById(req.params.id, (err, map) => {
      if (err) {
        res.send(err);
      }
      // If no errors, send it back to the client
      res.json(map);
    });
  }
  public deleteOne(req: Request, res: Response) {
    Server.getInstance().models.map.remove(req.params.id , (err) => {
        
          res.json({ message: 'Map successfully deleted!', err });
      });
  }

  public updateOne(req: Request, res: Response) {
      Server.getInstance().models.map.findById(req.params.id, (err, map) => {
        if (err) {
          res.send(err);
        }
        Object.assign(map, req.body).save((err2, map2) => {
          if (err2) {
            res.send(err2);
          }
          res.json({ message: 'Map updated!', map2 });
          }); 
      });
}  
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
    this.router.post('/', this.postOne);

    this.router.get('/:id', this.getOne);
    this.router.delete('/:id', this.deleteOne);
    this.router.put('/:id', this.updateOne);
  }

}
