import React from "react";

export const TaskList = ({ todos, setTodo, edit, setEdit }) => {
  const deleteTask = ({ id }) => {
    setTodo(todos.filter((task) => task.id !== id));
  };
  const handleEdit = ({ id }) => {
    const findTask = todos.find((task) => task.id === id);
    setEdit(findTask);
  };
  const checkTask = (task) => {
    setTodo(
      todos.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      <h1>Task List</h1>
      <br />
      {todos.map((item) => {
        return (
          <div className="" key={item.id}>
            <h3> {item.title}</h3>
            <button onClick={() => checkTask(item)}>done</button>
            <button onClick={() => deleteTask(item)}>delete</button>
            <button onClick={() => handleEdit(item)}>edit</button>
          </div>
        );
      })}
    </div>
  );
};
