import React from 'react';
import { string } from 'prop-types';
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

const Panel = ({ sn }) => (
  <div className="panel">
    <Screen />
    <Keypad keys={keys} />
    <p className="panel__sn">{`S/N: ${sn}`}</p>
  </div>
);

Panel.propTypes = {
  sn: string.isRequired,
};

export default Panel;
