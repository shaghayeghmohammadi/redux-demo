import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_FAILURE:
      return { loading: false, error: action.payload, data: [] };
    case FETCH_USER_SUCCESS:
      return { ...state, error: "", data: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
