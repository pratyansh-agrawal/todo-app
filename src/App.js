import { useState } from "react";

import "./App.css";
import Form from "./Form";
import ActionItemList from "./ActionItemList";

import { Typography } from "@material-ui/core";

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">

      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <Form
        saveTodo={(value) => {
          const sanitizedInput = value.trim();
          if (sanitizedInput.length > 0) {
            setTodos([...todos, sanitizedInput]);
          }
        }}
      />

      <ActionItemList 
      todos={todos} 
      deleteTodo={
        (todoIndex) => {
          const newTodos = todos.filter((_,index) => index !== todoIndex);
          setTodos(newTodos);
        }
      }/>
    </div>
  );
}

export default App;
