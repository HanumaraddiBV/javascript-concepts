import React from "react";
import ReactDOM from "react-dom";

class InputTxt extends React.Component {
  constructor() {}
  handleInput(e) {
    console.log("e:", e.target.value);
  }
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement("input", {
        type: "text",
        placeholder: "Enter value",
        onChange: handleInput,
      })
    );
  }
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    
    InputTxt,
    document.getElementById('root')
)
export default InputTxt;
