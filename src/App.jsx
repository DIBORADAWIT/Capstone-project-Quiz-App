import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Intro from "./Intro";
import Home from "./home";
import Information from "./information";
import Subjects from "./subjects";
import Custom from "./custom";
import Routers from "./Routes";

// import startupPage from "./components/startupPage";

export default function App() {
  return (
    <>
      {/* <div>Hello There</div> */}
      <Routers></Routers>
    </>
  );
}
