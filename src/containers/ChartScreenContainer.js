import {connect} from 'react-redux';
import ChartScreen from '../screens/ChartScreen';
import {getAllBillsByYear} from '../actions/allbills.action';

const mapStateToProps = (state) => {
  console.log('=============container==', state.allbills.graphData);
  return {
    graphData: state.allbills.graphData,
    graphLoading: state.allbills.graphLoading,
    graphError: state.allbills.graphError,
    graphStatus: state.allbills.graphStatus,
    graphType: state.allbills.graphType,
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
