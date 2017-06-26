let nextMapId = 0

export const addMap = text => {
  return {
    type: 'ADD_MAP',
    id: nextMapId++,
    text
  }
}
