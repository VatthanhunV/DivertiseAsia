// import React from "react";

const FizzBuzz = () => {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      numbers.push("FizzBuzz");
    } else if (i % 3 === 0) {
      numbers.push("Fizz");
    } else if (i % 5 === 0) {
      numbers.push("Buzz");
    } else {
      numbers.push(i);
    }
  }

  return (
    <div>
      {numbers.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </div>
  );
};

export default FizzBuzz;
