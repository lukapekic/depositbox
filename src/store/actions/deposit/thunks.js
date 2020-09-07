import {
  setPassword,
  setPasswordInput,
  changeMode,
  lockSafe,
  unlockSafe,
} from './actions';

const toogleLock = (input) => (dispatch, getState) => {
  const { deposit } = getState();
  const { mode, locked, password, serviceCode } = deposit;

  if (input === serviceCode) {
    dispatch(changeMode('Service'));
  } else if (!password) {
    dispatch(changeMode('Locking'));
    dispatch(setPassword(input));

    setTimeout(() => {
      dispatch(lockSafe());
      dispatch(changeMode('Ready'));
    }, 3000);
  } else if (input === password) {
    dispatch(changeMode(locked ? 'Unlocking' : 'Locking'));

    setTimeout(() => {
      dispatch(locked ? unlockSafe() : lockSafe());
      dispatch(changeMode('Ready'));
    }, 3000);
  } else if (input !== password) {
    dispatch(changeMode('Error'));
    setTimeout(() => {
      dispatch(changeMode('Ready'));
    }, 3000);
  }
};

let timer;

const handlePasswordChange = (value) => {
  return (dispatch, getState) => {
    const { deposit } = getState();
    const { passwordInput, passwordLength, mode } = deposit;

    //  idle time incresead because 1.2 is too fast
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(toogleLock(passwordInput));
      dispatch(setPasswordInput(''));
    }, 2500);

    if (value === 'L' && mode !== 'Service') {
      dispatch(toogleLock(passwordInput));
      return dispatch(setPasswordInput(''));
    }

    if (value === 'L' && mode === 'Service') {
      return dispatch(setPasswordInput(passwordInput + value));
    }

    if (passwordInput.length !== passwordLength) {
      return dispatch(setPasswordInput(passwordInput + value));
    }
  };
};

export { toogleLock, handlePasswordChange };
