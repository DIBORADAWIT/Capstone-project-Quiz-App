import React from "react";
import "./App.css";

function Intro() {
  return (
    <div className="quizappaall">
      <div className="h1logo">THE QUIZ</div>
      <div className="logo">
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2052894734/display_1500/stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg"
          alt="logo.png"
          className="logo"
        />
      </div>
      <div>
        <button className="button">Start</button>
      </div>
    </div>
  );
}

export default Intro;
