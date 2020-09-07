import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  toogleLock,
  handlePasswordChange,
} from '../../store/actions/deposit/thunks';
import { ControlPanel, List } from '../../components';

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
      <header className="header">
        <div className="header__content">
          <List title="Locking">
            <li>
              Before closing doors enter any 6 digit passcode.
              Remember the passcode!
            </li>
            <li>
              Close the door and press lock button [L] to lock the
              safe.
            </li>
          </List>
          <List title="Unlocking">
            <li>Enter your 6 digit passcode**</li>
            <li>
              Please leave the door open before checking out from
              hotel
            </li>
          </List>
          <blockquote>
            ** If you can’t remember passcode, please call reception
            to help you for a small fee of 5€
          </blockquote>
        </div>
      </header>
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
