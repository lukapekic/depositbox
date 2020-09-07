import React from 'react';
import { string, bool, func } from 'prop-types';
import { Screen, Keypad } from '../index';
import { keys } from '../../common/data';

const Panel = ({ locked, mode, sn, passwordInput, handleChange }) => {
  const onKeyPress = (value) => handleChange(value);
  const onKeyClick = (value) => handleChange(value);

  return (
    <div className="panel">
      <Screen locked={locked} mode={mode} input={passwordInput} />
      <Keypad
        keys={keys}
        onKeyPress={onKeyPress}
        onKeyClick={onKeyClick}
      />
      <p className="panel__sn">{`S/N: ${sn}`}</p>
    </div>
  );
};

Panel.propTypes = {
  sn: string.isRequired,
  locked: bool.isRequired,
  mode: string.isRequired,
  passwordInput: string.isRequired,
  handleChange: func.isRequired,
};

export default Panel;
