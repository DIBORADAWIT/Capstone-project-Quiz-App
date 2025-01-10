import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NoOfQuestions() {
  const [questions, setQuestions] = useState(0);
  const { topic, topicName, difficulty } = useParams();
  return (
    <div>
      <div className="flex flex-col gap-20">
        <div className="sm:text-7xl text-3xl font-extrabold underline">
          #Questions
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-start items-start gap-4">
            <input
              className="bg-white text-black rounded-lg px-5 py-2 w-full"
              type="number"
              min={0}
              max={50}
              onChange={(event) => setQuestions(event.target.value)}
              value={questions}
            />
          </div>
          <div className="flex gap-10 mt-10 justify-center">
            <a
              href={`/difficulty/${topic}/${topicName}`}
              className="bg-white text-black px-10 py-2 rounded-lg"
            >
              Back
            </a>

            <a
              href={`/questions/${topic}/${topicName}/${difficulty}/${questions}`}
              className="bg-white text-black px-10 py-2 rounded-lg"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoOfQuestions;
