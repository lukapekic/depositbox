import React from 'react';
import { string, bool, number, func } from 'prop-types';
import { Screen, Keypad } from '../index';

const keys = [
  {
    label: 9,
  },
  {
    label: 8,
    symbol: '↑',
  },
  {
    label: 7,
  },
  {
    label: 6,
    symbol: '→',
  },
  {
    label: 5,
  },
  {
    label: 4,
    symbol: '←',
  },
  {
    label: 3,
  },
  {
    label: 2,
    symbol: '↓',
  },
  {
    label: 1,
  },
  {
    label: 'L',
    symbol: 'A',
  },
  {
    label: 0,
  },
  {
    label: '*',
    symbol: 'B',
  },
];

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
  passwordInput: number.isRequired,
  handleChange: func.isRequired,
};

export default Panel;
