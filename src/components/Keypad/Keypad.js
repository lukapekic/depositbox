import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Key } from '../index';

const Keypad = ({ keys }) => (
  <div className="keypad">
    {keys.map(({ label, symbol }) => (
      <Key label={label} symbol={symbol} />
    ))}
  </div>
);

Keypad.propTypes = {
  keys: arrayOf(
    shape({
      label: string,
    }),
  ),
};

Keypad.defaultProps = {
  keys: [],
};

export default Keypad;
