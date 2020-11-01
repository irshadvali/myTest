import * as billsAction from '../actions/allbills.action';

const allbills = (
  state = {
    getBillLoading: false,
    getBillError: null,
    getBillStatus: '',
    getBillType: '',
    billsData: null,
  },
  action,
) => {
  switch (action.type) {
    case billsAction.GET_ALL_BILLS_REQUEST:
      return Object.assign({}, state, {
        getBillLoading: true,
        getBillStatus: action.status,
      });
    case billsAction.GET_ALL_BILLS_SUCCESS: {
      return Object.assign({}, state, {
        billsData: action.allBillsData,
        getBillLoading: false,
        getBillStatus: action.status,
        getBillType: billsAction.GET_ALL_BILLS_SUCCESS,
      });
    }
    case billsAction.GET_ALL_BILLS_FAILURE:
      return Object.assign({}, state, {
        getBillError: action.error,
        getBillLoading: false,
        getBillStatus: action.status,
      });
    case billsAction.ADD_BILLS_REQUEST:
      return Object.assign({}, state, {
        getBillLoading: true,
        getBillStatus: action.status,
      });
    case billsAction.ADD_BILLS_SUCCESS: {
      return Object.assign({}, state, {
        billsData: action.addData,
        getBillLoading: false,
        getBillStatus: action.status,
        getBillType: billsAction.ADD_BILLS_SUCCESS,
      });
    }
    case billsAction.ADD_BILLS_FAILURE:
      return Object.assign({}, state, {
        getBillError: action.error,
        getBillLoading: false,
        getBillStatus: action.status,
      });
    case billsAction.FILTER_REQUEST:
      return Object.assign({}, state, {
        getBillLoading: true,
        getBillStatus: action.status,
      });
    case billsAction.FILTER_SUCCESS: {
      return Object.assign({}, state, {
        billsData: action.filterData,
        getBillLoading: false,
        getBillStatus: action.status,
        getBillType: billsAction.FILTER_SUCCESS,
      });
    }
    case billsAction.FILTER_FAILURE:
      return Object.assign({}, state, {
        getBillError: action.error,
        getBillLoading: false,
        getBillStatus: action.status,
      });
    default:
      return state;
  }
};
export default allbills;
