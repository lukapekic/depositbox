import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  toogleLock,
  handlePasswordChange,
} from '../../store/actions/deposit/thunks';
import { ControlPanel } from '../../components';

const HomePage = () => {
  const {
    locked,
    mode,
    sn,
    passwordLength,
    passwordInput,
  } = useSelector((state) => state.deposit);

  const dispatch = useDispatch();
  const handleLock = (v) => dispatch(toogleLock(v));
  const handleChange = (v) => dispatch(handlePasswordChange(v));

  return (
    <div>
      <main>
        <ControlPanel
          locked={locked}
          mode={mode}
          sn={sn}
          passwordLength={passwordLength}
          passwordInput={passwordInput}
          handleLock={handleLock}
          handleChange={handleChange}
        />
      </main>
    </div>
  );
};

export default HomePage;
