import axios from "axios";
import React, { useEffect, useState } from "react";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({}); // Store user's responses (keyed by question index)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean"
      )
      .then((resp) => {
        setQuestions(resp.data.results);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
      });
  };

  const checkAnswer = (value, index, correctAnswer) => {
    setResponses((prev) => ({
      ...prev,
      [index]: value === correctAnswer, // Store true if correct, false otherwise
    }));
  };

  const restartQuiz = () => {
    setResponses({});
    setShowModal(false);
    fetchQuestions(); // Reload questions
  };
  return (
    <div className="flex flex-col ">
      <div className="text-2xl font-bold ">Questions</div>
      {questions.map((question, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-start mb-6 gap-5"
        >
          <div className="flex gap-2">
            <span>{index + 1} .</span>
            <div dangerouslySetInnerHTML={{ __html: question.question }} />
          </div>
          <div className="flex gap-10 ml-10">
            <button
              onClick={() =>
                checkAnswer("True", index, question.correct_answer)
              }
              className="bg-white px-5 py-2 text-black rounded-xl hover:bg-gray-200"
              disabled={responses[index] !== undefined} // Disable button after answering
            >
              True
            </button>
            <button
              onClick={() =>
                checkAnswer("False", index, question.correct_answer)
              }
              className="bg-black px-5 py-2 text-white rounded-xl hover:bg-gray-950"
              disabled={responses[index] !== undefined} // Disable button after answering
            >
              False
            </button>
          </div>
          {responses[index] !== undefined && (
            <div
              className={`mt-2 ${
                responses[index] ? "text-green-500" : "text-red-500"
              }`}
            >
              {responses[index] ? "Correct" : "Incorrect"}
            </div>
          )}
        </div>
      ))}
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-5 hover:bg-blue-600"
        // onClick={() =>
        //   alert(
        //     `You answered ${
        //       Object.values(responses).filter(Boolean).length
        //     } correctly!`
        //   )
        // }
        onClick={() => {
          setShowModal(true);
        }}
      >
        Submit
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-black p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
            <p className="mb-4">
              You answered{" "}
              <span className="font-bold">
                {Object.values(responses).filter(Boolean).length}
              </span>{" "}
              out of {questions.length} questions correctly!
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={restartQuiz}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Restart Quiz
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Questions;
