import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./Welcome.jsx";

function App(props) {
  console.log("render")
  const [text, setText] = useState("hello");
  useEffect(() => {
    console.log("inside useeffect")

  },[xyz, abc, hello])
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.batch}</h1>
      <p>{text}</p>
      <button
        onClick={() => {
          setText("bye");
        }}
      >
        Click on me
      </button>
      <Welcome text={text} />
    </>
  );
}

export default App;
