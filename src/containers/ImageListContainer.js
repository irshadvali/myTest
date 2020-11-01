import {connect} from 'react-redux';
import ImageList from '../screens/ImageList';
import {getImageList} from '../actions/image.action';

const mapStateToProps = (state) => {
  return {
    imageData: state.image.imageData,
    getImageLoading: state.image.getImageLoading,
    getImageError: state.image.getImageError,
    getImageStatus: state.image.getImageStatus,
    getImageType: state.image.getImageType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getImageList: (searchText) => {
      dispatch(getImageList(searchText));
    },
  };
};

const ImageListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageList);
export default ImageListContainer;
