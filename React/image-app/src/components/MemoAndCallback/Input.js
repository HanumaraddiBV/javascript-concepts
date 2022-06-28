import React from "react";

const Input = (props) => {
    console.log('input component')
  return (
    <div>
      <label>{props.title}</label>
      <input
        onChange={props.onChange}
        name={props.name}
        value={props.val}
        placeholder={props.placeholder}
        type={props.inputType}
      />
    </div>
  );
};

export default Input;
