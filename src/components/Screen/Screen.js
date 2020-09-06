import React from 'react';
import { bool, string } from 'prop-types';
import classnames from 'classnames';

const Screen = ({ locked, mode, active }) => {
  const classes = classnames({
    screen: true,
    'screen--active': active,
  });

  return (
    <div className={classes}>
      <p className="screen__lock">{locked ? 'Locked' : 'Unlocked'}</p>
      <p className="screen__mode">{mode}</p>
    </div>
  );
};

Screen.propTypes = {
  locked: bool,
  mode: string,
  active: bool,
};

Screen.defaultProps = {
  locked: false,
  mode: 'Ready',
  active: false,
};

export default Screen;
