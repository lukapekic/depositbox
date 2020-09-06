import React from 'react';
import { string } from 'prop-types';

const Key = ({ label, symbol }) => (
  <div className="key" datasymbol={symbol}>
    <p className="key__label">{label}</p>
  </div>
);

Key.propTypes = {
  label: string.isRequired,
  symbol: string,
};

Key.defaultProps = {
  symbol: '',
};

export default Key;
