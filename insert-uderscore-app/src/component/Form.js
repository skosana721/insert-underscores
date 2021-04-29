import React, { useState } from "react";

function Form() {
  const [inputNumber, setInputNumber] = useState("");
  const [results, setResults] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputNumber) {
      setResults(insertUnderScore(inputNumber));
    }
  };
  const insertUnderScore = (num) => {
    let arr = num.split("");
    for (let i in arr) {
      if (
        arr[i] % 2 !== 0 &&
        arr.indexOf(arr[i]) !== 0 &&
        arr.indexOf(arr[i]) !== arr.length - 1
      ) {
        arr[i] += "_";
      }
    }
    return arr.join("");
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
      {results}
    </div>
  );
}

export default Form;
