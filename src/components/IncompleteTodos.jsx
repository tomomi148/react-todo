import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">TODOです</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
