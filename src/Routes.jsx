import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./Intro";
import Home from "./Home";
import Information from "./Information";
import Subjects from "./Subjects";
import Custom from "./Custom";

import React from "react";
import Questions from "./Questions";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Intro />}>
        {/* <intro /> */}
      </Route>
      <Route path="/homes" element={<Home />} />
      <Route path="/infos" element={<Information />} />
      <Route path="/subs" element={<Subjects />} />
      <Route path="/custom" element={<Custom />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
}

export default Routers;
