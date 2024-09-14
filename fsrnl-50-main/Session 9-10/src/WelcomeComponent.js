import { useState } from "react";

function WelcomeComponent(props) {
  const [name, setName] = useState("test");

  function x() {
    setName("newValue");
  }
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default WelcomeComponent;
