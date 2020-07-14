import React, { useState } from 'react';
import InnerComponent from './InnerComponent'
import './style.css'

const Task6 = () => {
  const [view, setView] = useState(true);
  const visibleFunc = () => {
    setView(!view);
  };

  return (
    <>
      <InnerComponent display={view} />
      <button className="hide-btn" onClick={visibleFunc}>Hide/View</button>
    </>
  )
}

export default Task6;