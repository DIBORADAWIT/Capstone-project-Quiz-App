import axios from "axios";
import React, { useState } from "react";

function Questions() {
  const [questions, setQuestions] = useState();

  const fetchQuestions = () => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean"
      )
      .then((resp) => {
        console.log(resp.data);
        setQuestions(resp.data);
      });
  };
  return (
    <div className="bg-red-500">
      Questions
      <button onClick={fetchQuestions} className="text-5xl">
        Fetch Questions
      </button>
      {questions &&
        questions.results.map((question) => {
          return (
            <div className="bg-red-500">
              <div>{question.question}</div>
              <div>{question.correct_answer}</div>
            </div>
          );
        })}
      <button>Submit</button>
    </div>
  );
}

export default Questions;
