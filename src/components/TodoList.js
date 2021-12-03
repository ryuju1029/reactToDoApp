import React, { useState } from 'react';

function TodoList() {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false
    },
    {
      task: 'Learn React Hook',
      isCompleted: false
    },
    {
      task: 'Learn Gatsdy.js',
      isCompleted: false
    },
  ]

  const [todos, SetTodo] = useState(initialState);
  const [task, setTask] = useState('')
  const handleNewTask = (event) => {
    setTask(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (task === '') return
    {/*
     ...todos == スプレッド演算子
     ...を用いた配列の展開を行うオペレーター
    */}
    SetTodo(todos => [...todos, { task, imCompleted: false }])
    setTask('')
  }
  {/*
     todosを展開してnewTodosに渡す
     spliceメソッドを利用してindex番目の要素の1つを削除する
  */}
  const handleRemoveTask = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    SetTodo(newTodos)
  }
  const handleUpdateTask = index => {
    let newTodos = todos.map((todo,todoIndex) => {
      if(todoIndex === index ){
        {/*
          isCompletedの値がtureならfalse falseならtureにする
        */}
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    })
    SetTodo(newTodos);
  } 


  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        add Task : <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
      </form>
      {/*
     　　　map関数は配列内の要素をコールバックで処理して、配列としてreturnするメソッド
     　　　mapの第一引数todosはuseStateでtodosの初期値に指定してあるinitialState配列が入っている
      */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={ todo.isCompleted === true ? {textDecorationLine: 'line-through'}:{}}>{todo.task}<span onClick={() => handleUpdateTask(index)}>X</span></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;