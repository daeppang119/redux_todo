import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todos";

function Form() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const dispatch = useDispatch();

  const id = Date.now();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id,
      title,
      contents,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={contents}
        onChange={(e) => {
          setContents(e.target.value);
        }}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
