import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Difficulty() {
  const { topic } = useParams();

  const [difficulty, setDifficulty] = useState("");
  return (
    <div className="">
      <div className="flex flex-col gap-5">
        <button
          className="bg-green-300 px-5 py-2 focus:bg-green-500 "
          onClick={() => setDifficulty("easy")}
        >
          Easy
        </button>
        <button
          className="bg-orange-300 px-5 py-2 focus:bg-orange-500 "
          onClick={() => setDifficulty("medium")}
        >
          Medium
        </button>
        <button
          className="bg-red-300 px-5 py-2 focus:bg-red-500 "
          onClick={() => setDifficulty("hard")}
        >
          Hard
        </button>
        <div className="flex gap-10">
          <a
            className="bg-white text-black px-10 py-2 rounded-lg"
            href={`/topics`}
          >
            Back
          </a>
          {difficulty != "" && (
            <a
              className="bg-white text-black px-10 py-2 rounded-lg"
              href={`/noOfQuestions/${topic}/${difficulty}`}
            >
              Next
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Difficulty;
