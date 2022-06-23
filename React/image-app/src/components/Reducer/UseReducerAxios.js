import axios from "axios";
import React, { useEffect, useReducer } from "react";
const init = {
    data: {},
    error: "",
    load: true,
  };
const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
        return{...state,data: action.value,load:false}
    case 'error':
        return{...state,error:'something went wrong',load:false}
    default:
        return state
  }
};

export const UseReducerAxios = () => {
  const [state, dispatch] = useReducer(reducer, init);
  console.log('state:', state)
 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        dispatch({ type: "success", value: res.data });
      })
      .catch((e) => {
        dispatch({ type: "error" });
      });
  }, []);
  return (
    <div>
      {state.load ? <h1>Loading...</h1> : <h1>{state.data.title}</h1>}
      {state.error ? <h1>{state.error}</h1> : null}
    </div>
  );
};
