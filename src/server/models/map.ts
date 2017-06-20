import { Document } from 'mongoose';
import { IMap } from '../interfaces/map';

export interface IMapModel extends IMap, Document {
  // custom methods for your model would be defined here
}