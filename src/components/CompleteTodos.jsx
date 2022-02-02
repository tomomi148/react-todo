import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;

  return (
    <>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <span>{todo}</span>
                <button onClick={() => onClick(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
