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
    <div>
      Questions
      <button onClick={fetchQuestions}>Fetch Questions</button>
      {questions &&
        questions.results.map((question) => {
          return (
            <div>
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
