import { NextFunction, Request, Response } from "express";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class BaseRouter {

  protected title: string;

  private scripts: string[];

  /**
   * Constructor
   *
   * @class BaseRouter
   * @constructor
   */
  constructor() {
    //initialize variables
    this.title = "LetMeSee";
    this.scripts = [];
  }

  /**
   * Add a JS external file to the request.
   *
   * @class BaseRouter
   * @method addScript
   * @param src {string} The src to the external JS file.
   * @return {BaseRouter} Self for chaining
   */
  public addScript(src: string): BaseRouter {
    this.scripts.push(src);
    return this;
  }

  
  public render(req: Request, res: Response, view: string, options?: Object) {
    //add constants
    res.locals.BASE_URL = "/";

    //add scripts
    res.locals.scripts = this.scripts;

    //add title
    res.locals.title = this.title;

    //render view
    res.render(view, options);
  }
}