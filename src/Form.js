import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import 'bootstrap/dist/css/bootstrap.css';

const Form = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return (
    <form
        onSubmit={(event) => {
            event.preventDefault();
            saveTodo(value);
            setValue('');
        }}
    >
      <TextField
        className={"text-white bg-dark"}
        placeholder=" + Add action item here..."
        onChange={(event) => setValue(event.target.value)}
        variant="outlined"
        margin="normal"
        value={value}
        fullWidth
      />
    </form>
  );
};

export default Form;
