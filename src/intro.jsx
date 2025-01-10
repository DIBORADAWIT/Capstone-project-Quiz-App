import React from "react";
import "./App.css";
import userHistory from "./stores/userHistory";

function Intro() {
  const history = userHistory((state) => state.history);
  const clearHistory = userHistory((state) => state.clearHistory);

  return (
    <div>
      <div className="text-5xl font-extrabold uppercase underline">
        User History
      </div>

      {history.length > 0 ? (
        <div className="flex flex-wrap gap-5 mt-10 ">
          {history.map((entry, index) => (
            <div className="bg-white text-black p-5 rounded-lg" key={index}>
              <div className="flex gap-10 justify-between">
                <div className="font-bold">Topic</div>
                <div>{entry.topicName}</div>
              </div>
              <div className="flex gap-10 justify-between">
                <div className="font-bold">Correct</div>
                <div>{entry.correctCount}</div>
              </div>
              <div className="flex gap-10 justify-between">
                <div className="font-bold">Incorrect</div>
                <div>{entry.incorrectCount}</div>
              </div>
              <div className="flex gap-10 justify-between">
                <div className="font-bold">Date</div>
                <div>{new Date(entry.timestamp).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No history found</p>
      )}
      <div className=" flex gap-10 justify-center mt-10">
        {history.length > 0 ? (
          <button
            className="text-3xl bg-red-700 text-white px-5 py-2 rounded-lg hover:bg-red-800 hover:text-white"
            onClick={clearHistory}
          >
            Clear History
          </button>
        ) : null}

        <a
          className="text-3xl bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 hover:text-white"
          href="/topics"
        >
          Start Quiz
        </a>
      </div>
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
