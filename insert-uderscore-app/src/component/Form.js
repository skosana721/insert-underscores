import React, { useState } from "react";

function Form() {
  const [inputNumber, setInputNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNumber) {
      console.log(inputNumber);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={(e) => setInputNumber(e.target.value)}
          value={inputNumber}
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
