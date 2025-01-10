import React from "react";
import "./App.css";
import userHistory from "./stores/userHistory";

function Intro() {
  const history = userHistory((state) => state.history);
  const clearHistory = userHistory((state) => state.clearHistory);

  return (
    <div>
      <h2>User History</h2>
      {history.length > 0 ? (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              <p>Topic: {entry.topicName}</p>
              <p>Correct: {entry.correctCount}</p>
              <p>Incorrect: {entry.incorrectCount}</p>
              <p>Date: {new Date(entry.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No history found</p>
      )}
      <button onClick={clearHistory}>Clear History</button>
    </div>
  );
}

export default Intro;

function QuizSummary({ topicName, correctAnswers, incorrectAnswers }) {
  const addHistory = userHistory((state) => state.addHistory);

  const handleSaveHistory = () => {
    addHistory(topicName, correctAnswers, incorrectAnswers);
    alert("History saved!");
  };

  return (
    <div>
      <h2>Quiz Summary</h2>
      <p>Topic: {topicName}</p>
      <p>Correct: {correctAnswers}</p>
      <p>Incorrect: {incorrectAnswers}</p>
      <button onClick={handleSaveHistory}>Save to History</button>
    </div>
  );
}
