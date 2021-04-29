import React, { useState } from "react";

function Form() {
  const [inputNumber, setInputNumber] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="number"
          onChange={(e) => setInputNumber(e.target.value)}
          value={inputNumber}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Form;
