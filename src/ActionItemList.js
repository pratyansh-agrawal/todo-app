import React from "react";
import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

import 'bootstrap/dist/css/bootstrap.css';


const ActionItemList = ({ todos, deleteTodo, toggleTodoState }) => {
  return (
    <List className={""}>
      {todos.map((todo, index) => (
        <ListItem key={index} dense>
          <Checkbox
            checked={todo.complete}
            color="primary"
            tabIndex={-1}
            disableRipple
            onClick={() => toggleTodoState(index)}
          />
          <ListItemText
            primary={todo.text}
            style={todo.complete ? {textDecoration: "line-through"}: {}}
          />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ActionItemList;
