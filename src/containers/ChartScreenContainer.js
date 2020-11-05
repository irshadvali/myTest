import {connect} from 'react-redux';
import ChartScreen from '../screens/ChartScreen';
import {getAllBillsByYear} from '../actions/allbills.action';

const mapStateToProps = (state) => {
  return {
    billsData: state.allbills.billsData,
    getBillLoading: state.allbills.getBillLoading,
    getBillError: state.allbills.getBillError,
    getBillStatus: state.allbills.getBillStatus,
    getBillType: state.allbills.getBillType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBillsByYear: (filterBy) => {
      dispatch(getAllBillsByYear(filterBy));
    },
  };
};

const ChartScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartScreen);
export default ChartScreenContainer;
