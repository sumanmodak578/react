import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = function () {
    // console.log("Value added", Math.random());
    // counter = counter + 1;

    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
      alert("Limit exceeded");
    }
  };

  const removeValue = function () {
    // counter = counter - 1;
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter);
      alert("Value cannot be negative");
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>
    </>
  );
}

export default App;
