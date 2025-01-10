import React from "react";
import { useParams } from "react-router-dom";

function Subjects() {
  const { topic, difficulty } = useParams();
  return (
    <div className="subs">
      <div>Topic: {topic}</div>
      <div>Difficulty: {difficulty}</div>
      <div>
        <p className="p">Choose Your Subject Item</p>
      </div>
      <div>
        <button className="englishbutton">English</button>
      </div>
      <div>
        <button className="mathbutton">Math</button>
      </div>
      <div></div>
      <div>
        <button className="generalbutton">General Knowledge</button>
      </div>
      <div>
        <button className="geobutton">Geography</button>
      </div>
      <div>
        <button className="biobutton">Biology</button>
      </div>
      <a href={`/numberOfQuestions/${topic}/${difficulty}`} className="button">
        custom
      </a>
    </div>
  );
}

export default Subjects;
