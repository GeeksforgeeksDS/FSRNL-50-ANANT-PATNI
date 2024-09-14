import { useState, useEffect } from "react";

function WelcomeComponentUseEffect(props) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("Rendered");

  useEffect(() => {
    // call a backend api, get the results and store it in a variable.
    console.log("Inside useEffect");
    //Run on first render
    //Runs whenever count changes
  }, []);

  const handleClickIncrement = () => {
    setCount(count + 1);
    console.log("I clicked increment button and count2 got incremented");
  };

  const handleClickDecrement = () => {
    setCount2(count2 - 1);

    console.log("I clicked decrement button and count got decremented");
  };

  return (
    <div className="App">
      <button type="button" onClick={handleClickIncrement}>
        Increment
      </button>
      {count}
      <button type="button" onClick={handleClickDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default WelcomeComponentUseEffect;
