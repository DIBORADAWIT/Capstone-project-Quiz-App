import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import Home from "./Home";
import Information from "./Information";
import Subjects from "./Subjects";

import React from "react";
import Questions from "./Questions";
import Topic from "./components/Topic";
import NoOfQuestions from "./components/NoOfQuestions";
import Difficulty from "./components/Difficulty";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Intro />}>
        {/* <intro /> */}
      </Route>
      <Route path="/homes" element={<Home />} />

      <Route path="/topics" element={<Topic />} />
      <Route path="/difficulty/:topic/:topicName" element={<Difficulty />} />
      <Route
        path="/noOfQuestions/:topic/:topicName/:difficulty"
        element={<NoOfQuestions />}
      />
      <Route
        path="/questions/:topic/:topicName/:difficulty/:amount"
        element={<Questions />}
      />
    </Routes>
  );
}

export default Routers;
