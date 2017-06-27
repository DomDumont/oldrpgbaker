import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { TileMap, IState } from '../model';
import {
  ADD_TILEMAP,
  DELETE_TILEMAP,
  EDIT_TILEMAP,
} from '../constants/ActionTypes';

const initialState: IState = [<TileMap>{
  text: 'My TileMap de rêve',
  id: 0
}];

export default handleActions<IState, TileMap>({
  [ADD_TILEMAP]: (state: IState, action: Action<TileMap>): IState => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      text: action.payload.text
    }, ...state];
  },

  [DELETE_TILEMAP]: (state: IState, action: Action<TileMap>): IState => {
    return state.filter(todo =>
      todo.id !== action.payload.id
    );
  },

  [EDIT_TILEMAP]: (state: IState, action: Action<TileMap>): IState => {
    return <IState>state.map(todo =>
      todo.id === action.payload.id
        ? assign(<TileMap>{}, todo, { text: action.payload.text })
        : todo
    );
  },

}, initialState);