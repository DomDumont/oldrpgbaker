let nextMapId = 0

export const addMap = (text:string) => {
  return {
    type: 'ADD_MAP',
    id: nextMapId++,
    text
  }
}
