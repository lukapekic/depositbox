import {
  LOCK,
  UNLOCK,
  SET_PASSWORD,
  SET_PASSWORD_INPUT,
  CHANGE_MODE,
} from '../actions/deposit/types';

const initialState = {
  locked: false,
  password: '',
  passwordLength: 6,
  passwordInput: '',
  sn: '481516234',
  mode: 'Ready',
  masterCode: '456R987L0123',
  serviceCode: '000000',
};

const depositBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCK:
      return {
        ...state,
        locked: true,
      };

    case UNLOCK:
      return {
        ...state,
        locked: false,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case SET_PASSWORD_INPUT:
      return {
        ...state,
        passwordInput: action.payload,
      };

    case CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};

export default depositBoxReducer;
