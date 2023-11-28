import React from "react";
import TodoList from "../redux/components/TodoList";
import Form from "../redux/components/Form";

const Home = () => {
  return (
    <>
      <Form />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </>
  );
};

export default Home;
