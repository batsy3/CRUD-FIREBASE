import React, { useState } from "react";
import Header from "./Header";
import "../App.css";
import { Forms } from "./Forms";
import { TaskList } from "./TaskList";

const Main = () => {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);
  return (
    <div className="">
      <div>
        <Header />
        <br />
        <Forms
          input={input}
          setInput={setInput}
          todos={todos}
          setTodo={setTodo}
          edit={edit}
          setEdit={setEdit}
        />
        <br />
        <TaskList
          todos={todos}
          setTodo={setTodo}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
};

export default Main;
