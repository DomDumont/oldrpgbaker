import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import {MapRouter} from './routes/map';

import * as mongoose  from 'mongoose'; 

import { IModels } from './models/models'; 
import { IUserModel } from './models/user'; 
import { IMapModel } from './models/map'; 

// schemas
import { userSchema } from './schemas/user'; 
import { mapSchema } from './schemas/map'; 

// Creates and configures an ExpressJS web server.
export class Server {

  private static instance: Server;
  // ref to Express instance
  public app: express.Application;
  private _models: IModels; // an instance of IModel

  static getInstance() {
        if (!Server.instance) {
            Server.instance = new Server();
            // ... any one time initialization goes here ...
        }
        return Server.instance;
    }

  get models(): IModels {
    return this._models;
  }
  // Run configuration methods on the Express instance.
  private constructor() {
    this.app = express();
    // this.model = Object(); // initialize this to an empty object
    this._models = <IModels> {};
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {

    const MONGODB_CONNECTION: string = 'mongodb://localhost:27017/rpgmaker';
    const PASSPORT_SECRET: string = 'myAssOnTheCommode12';

    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

   // use q promises
    
    // mongoose.Promise = require('q').Promise;

      // connect to mongoose
    let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);

    // create models
    this._models.user = connection.model<IUserModel>('User', userSchema);
    this._models.map = connection.model<IMapModel>('Map', mapSchema);

    /* TODO
    // catch 404 and forward to error handler
    this.app.use(function(err: {}, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    // error handling
    this.app.use(errorHandler());
    */
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    this.app.use('/', router);
    this.app.use('/api/v1/maps', new MapRouter().router);
  }

}
