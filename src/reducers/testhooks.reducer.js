import * as testhooksAction from '../actions/testhooks.action';

const testhooks = (
  state = {
    count: 0,
  },
  action,
) => {
  console.log('==============testhooksAction==', action.type);
  switch (action.type) {
    case testhooksAction.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case testhooksAction.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    default:
      return {count: state.count};
  }
};
export default testhooks;
