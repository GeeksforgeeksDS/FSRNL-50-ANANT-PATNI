import { useState } from "react";

function WelcomeComponentState() {
  const [count, setCount] = useState(0);

  console.log("Rendered");

  const handleClickIncrement = () => {
    setCount(count + 1);
    console.log("I clicked increment button");
  };

  const handleClickDecrement = () => {
    setCount(count - 1);

    console.log("I clicked decrement button");
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

export default WelcomeComponentState;
