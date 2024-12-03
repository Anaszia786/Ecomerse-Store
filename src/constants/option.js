import React from "react";
import { useDispatch } from "react-redux";
import { backtotodo, complete, inProgress } from "../Redux/Todo/todoSlice";
// import { complete, deleteTodo, inProgress } from "";

const Option = ({ task, id, option }) => {
  console.log("Option -> task", task);
  // const options = useSelector((state) => state.tasks.todo);
  const dispatch = useDispatch();

  const addStatusHandler = (text) => {
    console.log("addStatusHandler -> text", text);
    if (text === "In Progress") {
      dispatch(inProgress(task));
      // dispatch(deleteTodo(id));
    } else if (text === "Complete") {
      dispatch(complete(task));
    } else if (text === "To Do") {
      dispatch(backtotodo(task));
    }
  };

  return (
    <div
      key={id}
      className="bg-slate-400 absolute right-4 top-12 z-10 text-white cursor-pointer rounded-b-md  list-none  "
    >
      {option.map((item) => {
        return (
          <li
            onClick={() => addStatusHandler(item)}
            className="hover:bg-amber-300 p-2"
          >
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default Option;
