import { useState } from "react";

import "./App.css";
import Form from "./Form";
import ActionItemList from "./ActionItemList";

import { Typography } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App overlay">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <Form
        saveTodo={(value) => {
          const sanitizedInput = value.trim();
          if (sanitizedInput.length > 0) {
            setTodos([...todos, { text: sanitizedInput, complete: false }]);
          }
        }}
      />

      <ActionItemList
        todos={todos}
        deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);
          setTodos(newTodos);
        }}
        toggleTodoState={(todoIndex) => {
          let newTodos = [...todos];
          newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
          setTodos(newTodos);
        }}
      />
    </div>
  );
}

export default App;
