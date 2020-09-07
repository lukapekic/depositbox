import {
  LOCK,
  UNLOCK,
  SET_PASSWORD,
  SET_PASSWORD_INPUT,
  CHANGE_MODE,
} from './types';

export const lockSafe = () => ({ type: LOCK });
export const unlockSafe = () => ({ type: UNLOCK });

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setPasswordInput = (value) => ({
  type: SET_PASSWORD_INPUT,
  payload: value,
});

export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: mode,
});
