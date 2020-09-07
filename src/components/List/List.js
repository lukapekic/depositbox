import React from 'react';

const List = ({ title, children }) => {
  return (
    <ol className="list list--ordered">
      <h4>{title}</h4>
      {children}
    </ol>
  );
};

export default List;
