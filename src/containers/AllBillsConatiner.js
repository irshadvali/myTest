import {connect} from 'react-redux';
import AllBillsList from '../screens/AllBillsList';
import {getAllBills, addNewItem, sortedBy} from '../actions/allbills.action';

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
    getAllBills: (filterBy) => {
      dispatch(getAllBills(filterBy));
    },
    addNewItem: (newItemData, filterName, billDate) => {
      dispatch(addNewItem(newItemData, filterName, billDate));
    },
    sortedBy: (filterName) => {
      dispatch(sortedBy(filterName));
    },
  };
};

const AllBillsConatiner = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllBillsList);
export default AllBillsConatiner;
