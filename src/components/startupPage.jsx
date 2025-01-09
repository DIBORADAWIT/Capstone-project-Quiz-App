import React from "react";
import { useNavigate } from "react-router-dom";
// import "./startupPage.css";
function startupPage() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/quiz");
  };
  return (
    <div className="quizapp">
      <h1 className="startup">THE QUIZ</h1>
      <div className="quiz-app">
        <img src="./https://www.istockphoto.com/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design-gm1186386668-334722134?searchscope=image%2Cfilm/logo.png">
          alt="quizLogo" className="logoquiz"
        </img>
        <button className="first-button" onClick>
          start
        </button>
      </div>
    </div>
  );
}
