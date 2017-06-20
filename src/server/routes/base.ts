import { NextFunction, Request, Response, Router } from 'express';

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class BaseRouter {

  protected title: string;
  public   router: Router;

  /**
   * Constructor
   *
   * @class BaseRouter
   * @constructor
   */
  constructor() {
    // initialize variables
    this.title = 'LetMeSee';
    this.router = Router();
  }

  public render(req: Request, res: Response, view: string, options?: Object) {
    // add constants
    res.locals.BASE_URL = '/';

    // add title
    res.locals.title = this.title;

    // render view
    res.render(view, options);
  }
}