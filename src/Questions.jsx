import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userHistory from "./stores/userHistory";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState({}); // Store user's responses (keyed by question index)
  const [showModal, setShowModal] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0); // Track the current question

  const { topic, topicName, difficulty, amount } = useParams(); // Default values

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${topic}&difficulty=${difficulty}&type=multiple`
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
    setQuestionNumber(0); // Reset to the first question
    fetchQuestions(); // Reload questions
  };

  const shuffleOptions = (incorrectAnswers, correctAnswer) => {
    const options = [...incorrectAnswers, correctAnswer];
    return options.sort(() => Math.random() - 0.5);
  };

  const nextQuestion = (correct) => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
    } else {
      // Save to history
      var incorrect = questions.length - correct;
      handleSaveHistory(correct, incorrect);

      // Show the modal when the quiz ends
      setShowModal(true);
    }
  };

  const previousQuestion = () => {
    if (questionNumber > 0) {
      setQuestionNumber((prev) => prev - 1);
    }
  };

  const currentQuestion = questions[questionNumber];

  // userHistory zustand
  const addHistory = userHistory((state) => state.addHistory);

  const handleSaveHistory = (correctAnswers, incorrectAnswers) => {
    addHistory(topicName, correctAnswers, incorrectAnswers);
    // alert("History saved!");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-extrabold mb-20 ">{topicName}</div>
      <div className="text-2xl font-bold mb-5 text-center">
        Question {questionNumber + 1}
      </div>
      {currentQuestion && (
        <div className="flex flex-col items-center gap-5">
          <div className="text-lg">
            <div
              dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
            />
          </div>
          <div className="flex gap-5">
            {shuffleOptions(
              currentQuestion.incorrect_answers,
              currentQuestion.correct_answer
            ).map((option, optIndex) => (
              <button
                key={optIndex}
                onClick={() =>
                  checkAnswer(
                    option,
                    questionNumber,
                    currentQuestion.correct_answer
                  )
                }
                className="bg-white px-5 py-2 text-black rounded-xl hover:bg-gray-200"
                disabled={responses[questionNumber] !== undefined} // Disable button after answering
                dangerouslySetInnerHTML={{ __html: option }}
              />
            ))}
          </div>
          {responses[questionNumber] !== undefined && (
            <div
              className={`mt-2 ${
                responses[questionNumber] ? "text-green-500" : "text-red-500"
              }`}
            >
              {responses[questionNumber] ? "Correct" : "Incorrect"}
            </div>
          )}
        </div>
      )}
      <div className="flex gap-5 mt-5">
        <button
          onClick={previousQuestion}
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
          disabled={questionNumber === 0} // Disable if it's the first question
        >
          Previous
        </button>
        <button
          onClick={() => {
            var correct = Object.values(responses).filter(Boolean).length;

            nextQuestion(correct);
          }}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          {questionNumber < questions.length - 1 ? "Next" : "Submit"}
        </button>
      </div>

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
              <a
                href="/topics"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Change Topic
              </a>
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
