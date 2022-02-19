/* eslint-disable prettier/prettier */
export const ONUPDATE = 'ONUPDATE';
export const DELETE = 'DELETE';
export const RESET = 'RESET';

export function onUpdate(index,id) {
  console.log('=======in onUpdate=1111=', index,id);
  return {
    type: ONUPDATE,
    index,
    id,
  };
}


export function deleteItems(id) {
  console.log("===========action deleteitem",id);
  return {
    type: DELETE,
    id,
  };
}

export function onUpdateData(index,id) {
  console.log('=======in onUpdateData==',index,id);
  return async (dispatch, getState, api) => {
    dispatch(onUpdate(index,id));
  };
}
export function deleteItem(id) {
  return async (dispatch, getState, api) => {
    dispatch(deleteItems(id));
  };
}
