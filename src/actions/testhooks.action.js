/* eslint-disable prettier/prettier */
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function increment() {
  console.log('=======in increment==');
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  console.log('=======in increment==');
  return {
    type: DECREMENT,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

export function add() {
  console.log('=======in add==');
  //increment();
  try {
    return async (dispatch, getState, api) => {
        dispatch(increment());
      };
  }
  // eslint-disable-next-line no-unreachable
  catch(e) {
    console.log('=======in add==',e);
  }

}
export function minus() {
  return async (dispatch, getState, api) => {
    dispatch(decrement());
  };
}
