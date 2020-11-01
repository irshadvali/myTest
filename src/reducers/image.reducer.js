import * as userAction from '../actions/image.action';

const image = (
  state = {
    getImageLoading: false,
    getImageError: null,
    getImageStatus: '',
    getImageType: '',
    imageData: null,
  },
  action,
) => {
  switch (action.type) {
    case userAction.GET_IMAGE_REQUEST:
      return Object.assign({}, state, {
        getImageLoading: true,
        getImageStatus: action.status,
      });
    case userAction.GET_IMAGE_SUCCESS: {
      return Object.assign({}, state, {
        imageData: action.imageObj,
        getImageLoading: false,
        getImageStatus: action.status,
        getImageType: userAction.GET_USER_SUCCESS,
      });
    }
    case userAction.GET_IMAGE_FAILURE:
      return Object.assign({}, state, {
        getImageError: action.error,
        getImageLoading: false,
        getImageStatus: action.status,
      });

    default:
      return state;
  }
};
export default image;
