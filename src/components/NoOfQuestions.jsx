import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NoOfQuestions() {
  const [questions, setQuestions] = useState(0);
  const { topic, difficulty } = useParams();
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col justify-start items-start gap-4">
          <p className="text-lg font-bold">Number Of Questions </p>
          <input
            className="bg-white text-black rounded-lg px-5 py-2 w-full"
            type="number"
            min={0}
            onChange={(event) => setQuestions(event.target.value)}
            value={questions}
          />
        </div>
        <div className="flex gap-10">
          <a
            href={`/difficulty/${topic}/${difficulty}`}
            className="bg-white text-black px-10 py-2 rounded-lg"
          >
            Back
          </a>

          <a
            href={`/questions/${topic}/${difficulty}/${questions}`}
            className="bg-white text-black px-10 py-2 rounded-lg"
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}

export default NoOfQuestions;
