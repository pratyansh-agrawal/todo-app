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

const ActionItemList = ({ todos, deleteTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index} dense>
          <Checkbox tabIndex={-1} disableRipple/>
          <ListItemText primary={todo}/>
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
