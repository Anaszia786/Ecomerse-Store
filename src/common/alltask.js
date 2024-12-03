import React, { useState } from "react";
import { iconImages } from "../constants/utils";
import Option from "../constants/option";

const Alltask = ({ task, des, taskkey, list, recolor }) => {
  const [showdes, Setshowdes] = useState(false);
  function handleTask() {
    Setshowdes(!showdes);
  }
  const [activekey, setActive] = useState("");
  return (
    <ul key={taskkey} className="flex flex-col relative list-none top-2">
      <div className=" flex " >
        <li
          // onClick={() => handleTask()}
          className={`${recolor} w-full border-l-4 border-red-500 my-1 py-5 px-2`}
        >
          {(task !== "") | null | undefined | [] ? task.todo.task : "none"}
        </li>
          <img className="absolute cursor-pointer right-10 top-6" onClick={() => handleTask()} src={iconImages.showdes} alt="" />
        <img
        className="cursor-pointer"
        onClick={() => {
          if (activekey === taskkey) {
            setActive("");
          } else {
            setActive(taskkey);
          }
        }}
        src={iconImages.menu}
        alt=""
        />
        </div>
        {showdes ? (
          <textarea
            className={`mt-2  bg-slate-100 w-full  rounded-r-md p-3`}
            name=""
            id=""
            cols="30"
            rows="2"
          >
            {task.todo.des?task.todo.des:Setshowdes(false)}
          </textarea>
        ) : null}
      
      {activekey === taskkey ? (
        <Option task={task} id={task.id} option={list} />
        ) : null}
    </ul>
  );
};

export default Alltask;
