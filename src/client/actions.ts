import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { TileMap } from './model';

import {
  ADD_TILEMAP,
  DELETE_TILEMAP,
  EDIT_TILEMAP
} from './constants/ActionTypes';

const addTileMap = createAction<TileMap, string>(
  ADD_TILEMAP,
  (text: string) => ({ text, completed: false })
);

const deleteTileMap = createAction<TileMap, TileMap>(
  DELETE_TILEMAP,
  (todo: TileMap) => todo
);

const editTileMap = createAction<TileMap, TileMap, string>(
  EDIT_TILEMAP,
  (tileMap: TileMap, newText: string) => <TileMap>assign(tileMap, { text: newText })
);


export {
  addTileMap,
  deleteTileMap,
  editTileMap,
}
