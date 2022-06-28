import React, { memo } from "react";

const Todos = ({ todos, createTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={createTodo}>Add new</button>
    </>
  );
};

export default React.memo(Todos);
