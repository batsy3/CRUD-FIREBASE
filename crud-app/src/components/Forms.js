import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
export const Forms = ({ input, setInput, todos, setTodo, edit, setEdit }) => {
 
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodo([...todos, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
      setInput("");
    }
  };

  const updateTodo = (title, id, completed) => {
    const newtodo = todos.map((item) =>
      item.id === id ? { title, id, completed } : item
    );
    setTodo(newtodo);
    setEdit("");
  };
  
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="enter task"
        className="task-input"
        value={input}
        required
        onChange={handleChange}
      />
      <button className="button-add" type="submit">
        {edit ? "ok" : "Add"}
      </button>
    </form>
  );
};
