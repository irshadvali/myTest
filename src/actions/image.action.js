import {SUCCESS, REQUESTING, ERROR} from './constants.action';

export const GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';
export const GET_IMAGE_FAILURE = 'GET_IMAGE_FAILURE';
//===================Image List================//
export function getImageRequest() {
  return {
    type: GET_IMAGE_REQUEST,
    status: REQUESTING,
  };
}

export function getImageSuccess(imageObj) {
  return {
    type: GET_IMAGE_SUCCESS,
    status: SUCCESS,
    imageObj,
  };
}

export function getImageFailure(error) {
  return {
    type: GET_IMAGE_FAILURE,
    status: ERROR,
    error,
  };
}

export function getImageList(searchText) {
  return async (dispatch, getState, api) => {
    dispatch(getImageRequest());
    try {
      const result = await api.get(
        `q=${searchText}&cx=${'011476162607576381860:ra4vmliv9ti'}`,
      );
      const resultJson = await result.json();
      if (result.errorCode > 400) {
        throw new Error(
          `[${result.errorCode}] ${resultJson.error.errorMessage}`,
        );
      }
      dispatch(getImageSuccess(resultJson));
    } catch (e) {
      dispatch(getImageFailure(e.message));
    }
  };
}
