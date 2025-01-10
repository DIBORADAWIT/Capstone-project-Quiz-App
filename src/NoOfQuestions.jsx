import React from "react";

function NoOfQuestions() {
  const [questions, setQuestions] = useState(0);
  return (
    <div className="questionnubers">
      <div>
        <p className="questionno">Number Of Questions </p>
        <input
          type="number"
          onChange={(event) => setQuestions(event.target.value)}
          value={questions}
        />
        <a href="" className="nextbutton">
          next
        </a>
      </div>
    </div>
  );
}

export default NoOfQuestions;
