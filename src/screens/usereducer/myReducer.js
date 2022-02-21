const myReducer = (state, action) => {
  console.log('=======myreducer==', state, action);
  switch (action.type) {
    case 'add':
      return {count: state.count + 1};
    case 'minus':
      return {count: state.count - 1};
    default:
      return new Error();
  }
};

export default myReducer;
