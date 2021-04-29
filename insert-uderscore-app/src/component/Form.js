import React, { useState } from "react";

function Form() {
  const [inputNumber, setinputNumber] = useState("");
  return (
    <div>
      <form action="">
        <input type="number" />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Form;
