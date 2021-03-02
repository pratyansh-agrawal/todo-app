import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const Form = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            saveTodo(value);
        }}
    >
      <TextField
        placeholder="Add action item here"
        onChange={(event) => setValue(event.target.value)}
        variant="outlined"
        margin="normal"
        value={value}
      />
    </form>
  );
};

export default Form;
