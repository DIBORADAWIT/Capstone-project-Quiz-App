import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Intro from "./intro";
import Home from "./home";
import Information from "./information";
import Subjects from "./subjects";
import Custom from "./custom";
import { Routes } from "react-router-dom";
// import startupPage from "./components/startupPage";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Intro></Intro>
      <Home></Home>
      <Information></Information>
      <Subjects></Subjects>
      <Custom></Custom>
    </>
  );
}
