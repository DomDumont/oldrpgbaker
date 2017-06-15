import makeStore from './store';
import {startServer} from './server';

export const store = makeStore();
startServer(store); // Let's pass the store to the server


store.dispatch({
  type: 'SET_ENTRIES',
  entries: require("./public/entries.json")
});
store.dispatch({type: 'NEXT'});

