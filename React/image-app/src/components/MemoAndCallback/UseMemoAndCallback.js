import React, { useCallback, useMemo, useState } from "react";
import { Button } from "./Button";
import Input from "./Input";
import Todos from "./Todos";

export const UseMemoAndCallback = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    "Learn React",
    "Learn Nodejs",
    "Learn Javascript",
  ]);
  const [todos2, setTodos2] = useState([]);
  const calculation = useMemo(() => isChange(count), [count]);

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  const addTodo = () => {
    setTodos((todos) => [...todos, "add something"]);
  };

  const createTodo = useCallback(() => {
    setTodos2((todos) => [...todos, "add todo"]);
  }, [todos2]);
  return (
    <div>
      {/* use memo example */}
      {/* <Todos todos={todos} /> */}

      {/* useCallback example */}
      <h1>UseCallback example</h1>
      <Todos todos={todos2} createTodo={createTodo} />
      <div>
        <h1>UseRef example</h1>
        <h2>My Todos memo</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={handleCount}>Increase</button>
        <h2> Calculation</h2>
        {calculation}
      </div>

      <hr></hr>
    </div>
  );
};
const isChange = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
