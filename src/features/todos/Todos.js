import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, decrement, decreTodo, toglggel } from "./todosSlice";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

export default function Counter() {
  const [value, setInputValue] = useState("");
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const hendleAddTodo = () => {
    if (value == "") {
      alert("no todo......");
    } else {
      dispatch(addtodo(value));
      setInputValue("");
    }
  };

  return (
    <div>
      <div style={{ marginTop: "50px",color:'#fff' }}>
        <Box mb={2}>
          <TextField
            label="add todo...."
            variant="outlined"
            value={value}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <IconButton aria-label="Increment value" onClick={hendleAddTodo}>
            <AddIcon />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          {count.map((item, i) => (
            <Box
              key={i}
              mt={1}
              p={2}
              borderRadius={4}
              display="flex"
              justifyContent="space-between"
              width="40%"
              bgcolor={item.color}
              sx={{
                textDecoration: item.selected == true ? "line-through" : "none",
              }}
            >
              <Box>
                <Checkbox
                  checked={item.selected}
                  onClick={() => dispatch(toglggel(i))}
                />{" "}
                {item.name}
              </Box>
              <IconButton onClick={() => dispatch(decreTodo(i))}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
}
