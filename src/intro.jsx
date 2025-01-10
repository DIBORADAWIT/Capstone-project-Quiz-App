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
      <a
        href="/homes"
        className="bg-pink-200 px-10 py-2 text-black rounded-lg uppercase"
      >
        start
      </a>
    </div>
  );
}

export default Intro;
