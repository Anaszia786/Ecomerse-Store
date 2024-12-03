import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Redux/Todo/todoSlice";
import { iconImages } from "../constants/utils";


const Bars = ({ title, recolor,color }) => {
  const [task, setTask] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const tsklenght=useSelector((state)=>state.tasks)
  // console.log("Bars -> tsklenght", tsklenght.todo)
  const addTaskHandler = (task, des) => {
    if (task && (task !== "") | null) {
      const data={
        task,
        des
      }
      console.log("addTaskHandler -> data", data)
      dispatch(addTask(data));
    }
    setTask("");
    setDes("");
  };

  return (
    <div className="col-span-1 border-[.1px]  flex flex-col gap-4 bg-[#f7f8f9] relative py-3 cursor-pointer px-2 rounded-2xl">
      <div>
        <button
          className={`${recolor} ${color} text- font-bold self-start p-3 rounded-md`}
        >
          {title}
        </button>
        <span className="">{tsklenght.length}</span>
      </div>
      {title == "TO DO" ? (
        <div className="flex flex-col flex-grow">
          <input
            className="  left-20 border-[.1px] rounded-md  p-3 bg-"
            value={task}
            type="text"
            placeholder="enter task title"
            onChange={(e) => setTask(e.target.value)}
          />
          <textarea
            value={des}
            cols="20"
            rows="2"
            className="mt-2 rounded-md border-[.1px] p-3 scroll-m-0"
            placeholder="enter description"
            onChange={(e) => setDes(e.target.value)}
          ></textarea>
          <button
            onClick={() => addTaskHandler(task, des)}
            className="font-semibold hover:bg-blue-800 mt-2 self-center  text-white px-5 py-2  rounded w-fit  bg-blue-400"
          >
            Add
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Bars;
