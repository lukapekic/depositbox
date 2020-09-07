import React from 'react';
import { arrayOf, shape, string, func } from 'prop-types';
import { Key } from '../index';

const Keypad = ({ keys, onKeyClick, onKeyPress }) => (
  <div className="keypad">
    {keys.map(({ label, symbol }) => (
      <Key
        label={label}
        symbol={symbol}
        onClick={() => onKeyClick(label)}
      />
    ))}
  </div>
);

Keypad.propTypes = {
  keys: arrayOf(
    shape({
      label: string,
      symbol: string,
    }),
  ),
  onKeyClick: func.isRequired,
  onKeyPress: func.isRequired,
};

Keypad.defaultProps = {
  keys: [],
};

export default Keypad;
