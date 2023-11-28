import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../modules/todos";

function TodoList({ isActive }) {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handelDeleteBtn = (id) => {
    dispatch(deleteTodo(id));
  };

  const handelSwitchBtn = () => {
    dispatch(SwitchTodo());
  };

  return (
    <>
      <h3>{isActive ? "해야할 일" : "완료된 일"}</h3>
      <ul>
        {todos
          .filter((item) => item.isDone === !isActive)
          .map((item) => {
            return (
              <li key={item.id}>
                <h4>{item.title}</h4>
                <p>{item.contents}</p>
                <button
                  onClick={() => {
                    handelSwitchBtn();
                  }}
                >
                  {item.isDone ? "취소" : "완료"}
                </button>
                <button onClick={() => handelDeleteBtn(item.id)}>삭제</button>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default TodoList;
