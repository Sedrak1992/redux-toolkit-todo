import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, decrement,decreTodo } from "./counterSlice";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

export function Counter() {
  const [value, setInputValue] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const hendleAddTodo = () => {
    dispatch(addtodo(value));
    setInputValue("");
    if (value == "") {
      alert("g;'ilh");
    }
  };
  
  console.log(value);
  return (
    <div>
      <div style={{ marginTop: "50px" }}>
        <input value={value} onChange={(e) => setInputValue(e.target.value)} />
        <button aria-label="Increment value" onClick={hendleAddTodo}>
          add....
        </button>
        <div style={{ border: "1px red solid" }}>
          {count.map((item, i) => (
            <div key={i}>
              {" "}
              {item} <DeleteIcon onClick={() => dispatch(decreTodo(i))  } />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
