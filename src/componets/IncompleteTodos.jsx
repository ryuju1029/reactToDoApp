import React from "react";

export const IncompleteTodos = (props) => {
  const {todos, onClickComplete, onClickDelete} = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {/* mapを使用してレンダリングしていく時はkeyを設定する */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を渡したいときは新しくアラート関数を作る必要がある */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}