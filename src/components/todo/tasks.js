import React, { useState } from "react";
import { useSelector } from "react-redux";
import Alltask from "../../common/alltask";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.todo) || [];
  return (
    <>
      {tasks.length === 0 ? (
        <p className="text-gray-500 ">No tasks available.</p>
      ) : (
        tasks.map((task, id) => (
          <Alltask
            task={task}
            taskkey={id}
            recolor={"bg-slate-300"}
            list={["In Progress", "Complete"]}
          />
        ))
      )}
    </>
  );
};

export default Tasks;
