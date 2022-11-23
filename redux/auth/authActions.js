import { SUCCESS_AUTH, SET_USER } from "./authTypes";

export const successAuthStorage = (data) => {
  return {
    type: SUCCESS_AUTH,
    payload: data,
  };
};

export const successUserStorage = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};
export const setAuth = (data) => (dispatch) => {
  dispatch(successAuthStorage(data));
};

export const setUser = (data) => (dispatch) => {
  dispatch(successUserStorage(data));
};
