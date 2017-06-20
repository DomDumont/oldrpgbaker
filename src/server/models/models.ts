import { Model } from 'mongoose';
import { IUserModel } from './user';
import { IMapModel } from './map';

export interface IModels {
  user: Model<IUserModel>;
  map: Model<IMapModel>;
}