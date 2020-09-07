import React, { useState, useEffect } from 'react';
import { bool, string } from 'prop-types';
import classnames from 'classnames';

const Screen = ({ locked, mode, input }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let idleTimeout;
    setActive(false);

    if (input || mode) {
      setActive(true);
      idleTimeout = setTimeout(() => setActive(false), 3000);
    }

    return () => {
      clearTimeout(idleTimeout);
    };
  }, [input, mode]);

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
