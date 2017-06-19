import * as Server from 'socket.io';

export function startServer(store) {
  const io = new Server().attach(8090);

  // Brutal, when something chaned in the store, we send the entire store.
  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );

  // When a new connection arrives, send the store also
  io.on('connection', (socket) => {
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });
}