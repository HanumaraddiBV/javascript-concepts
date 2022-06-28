import React, { useEffect, useRef, useState } from "react";

export const UseRefExample = () => {
  const [data, setData] = useState("");
    const count = useRef(0);
  const InpFocus = useRef();
  const prevVal = useRef(0);
  const FocusInp = () => {
    InpFocus.current.focus();
  };
  const [counter, setCounter] = useState(0);
  const ref = useRef();
  
  useEffect(() => {
    ref.current = "Reddy";
  }, []);
  
  useEffect(
    () => {
      console.log(counter, ref.current);
    },
    [counter]
  );
  useEffect(() => {
    // console.log('hii')
    count.current = count.current + 1;
  });
  useEffect(() => {
    prevVal.current = data;
  }, [data]);
  console.log('rendered')
  return (
    
    <div>
      <input
        ref={prevVal}
        type="text"
        value={data}
        onChange={(e) => console.log(prevVal)}
      />
      {/* <h1>Count : {count.current}</h1> */}
      <h1>current value {data}</h1>
      <h1>Previous value {prevVal.current}</h1>
      <button onClick={FocusInp}>Focus</button> <button onClick={() => setCounter((c) => c + 1)}>
          Increment
        </button>
        <h5>Counter Value: {counter}</h5>{" "}

    </div>
  );
};
