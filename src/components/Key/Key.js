import React from 'react';
import { string, func } from 'prop-types';

const Key = ({ label, symbol, onClick }) => (
  <button
    type="button"
    className="key"
    onClick={onClick}
    datasymbol={symbol}
  >
    <p className="key__label">{label}</p>
  </button>
);

Key.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired,
  symbol: string,
};

Key.defaultProps = {
  symbol: '',
};

export default Key;
