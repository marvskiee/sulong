import { SUCCESS_AUTH, SET_USER } from "./authTypes";

const initialState = {
  auth: null,
  user: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default authReducers;
