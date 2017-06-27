import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Map } from './model';

import {
  ADD_MAP,
  DELETE_MAP,
  EDIT_MAP
} from './constants/ActionTypes';

const addMap = createAction<Map, string>(
  ADD_MAP,
  (text: string) => ({ text, completed: false })
);

const deleteMap = createAction<Map, Map>(
  DELETE_MAP,
  (todo: Map) => todo
);

const editMap = createAction<Map, Map, string>(
  EDIT_MAP,
  (todo: Map, newText: string) => <Map>assign(todo, { text: newText })
);


export {
  addMap,
  deleteMap,
  editMap,
}
