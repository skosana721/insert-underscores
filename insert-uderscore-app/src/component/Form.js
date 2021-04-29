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
        <label htmlFor="number">Enter numbers</label>
        <input
          type="number"
          onChange={(e) => setInputNumber(e.target.value)}
          id="number"
          value={inputNumber}
          required
        />
        <button type="submit">Add</button>
      </form>
      {results && (
        <h2>
          Here is your output <span>{results}</span>
        </h2>
      )}
    </div>
  );
}

export default Form;
