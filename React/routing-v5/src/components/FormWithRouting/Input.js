import React from "react";

const Input = (props) => {
  //   console.log('props:', props)
  return (
    <div>
      <label>{props.title}</label>
      <input
        onChange={props.onChange}
        name={props.name}
        value={props.password}
        placeholder={props.placeholder}
        type={props.inputType}
      />
    </div>
  );
};

export default Input;
