// Pure function
// A Pure function is a function where the return value is only determined by its arguments without any side effects.

let numberArray = [6];

const pureAddNumber = number => argNumberArray =>
  argNumberArray.concat([number])

  console.log (pureAddNumber(7) (numberArray));   // [6,7]


  // Higher order Function

  // Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

const firstOrderFunc = () => console.log ('Hello, I am a First order function');
const higherOrder = ReturnFirstOrderFunc => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);