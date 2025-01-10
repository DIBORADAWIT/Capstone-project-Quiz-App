import React, { useState } from "react";
import { useParams } from "react-router-dom";
function Information({}) {
  const { topic } = useParams();

  const [difficulty, setDifficulty] = useState("");
  return (
    <div className="infopage">
      <div className="text-5xl">Topic is {topic}</div>
      <div className="flex flex-col justify-start text-start">
        <div className="email">Email Address</div>
        <div>
          <button className="">
            <input type="email" className="emailfield" name="" id="" />
          </button>
        </div>
        <a href="/subs" className="password">
          Password
        </a>
        <div>
          <dev className="">
            <input type="password" className="passwordfield" name="" id="" />
          </dev>
        </div>
        <button onClick={() => setDifficulty("easy")}>Easy</button>
        <button onClick={() => setDifficulty("medium")}>Medium</button>
        <button onClick={() => setDifficulty("difficult")}>Difficult</button>
        <a href={`/subs/${topic}/${difficulty}`}>Next</a>
      </div>
    </div>
  );
}
export default Information;
