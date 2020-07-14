import React, { useState } from "react";
import './style.css'

const Task7 = () => {

  const [score, setScore] = useState(0);
  const counter = () => {
    setScore(score < 10 ? score + 1 : score === 0)
  }

  return (
    <div className="wrapper">
      <p className="score">{score}</p>
      <h1>
        {score === 0
          ? "Click the button"
          : score >= 1 && score <= 4
            ? "Your result is poor"
            : score >= 5 && score <= 7
              ? "Your result is average"
              : score >= 8 && score <= 10
                ? "Your result is excellent"
                : "Click the button"}
      </h1>
      <button
        onClick={counter}
      >Button</button>
    </div >
  );

}
export default Task7;