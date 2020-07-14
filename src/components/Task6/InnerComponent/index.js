import React from 'react';

const InnerComponent = (props) => {
  const { display } = props;
  return (
    <div className="view-text">{display && <p>You are in</p>}</div>
  )
}
export default InnerComponent;