import React, { useState, useEffect } from 'react';
import { bool, string } from 'prop-types';
import classnames from 'classnames';

const Screen = ({ locked, mode, input }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let idleTimeout;

    if (input) {
      setActive(true);
      idleTimeout = setTimeout(() => setActive(false), 5000);
    }

    return () => {
      clearTimeout(idleTimeout);
    };
  }, [input]);

  const classes = classnames({
    screen: true,
    'screen--active': active,
  });

  return (
    <div className={classes}>
      <p className="screen__lock">{locked ? 'Locked' : 'Unlocked'}</p>

      <input
        className="screen__mode"
        type="text"
        value={input || mode}
      />
    </div>
  );
};

Screen.propTypes = {
  locked: bool,
  mode: string,
  input: string,
};

Screen.defaultProps = {
  locked: false,
  mode: 'Ready',
  input: null,
};

export default Screen;
