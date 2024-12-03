import React, { useState } from "react";
import { useSelector } from "react-redux";
import Alltask from "../../common/alltask";

const InProgress = () => {
  const tasks = useSelector((state) => state.tasks.inProgress) || [];

  return (
    <>
      {tasks.length === 0 ? (
        <p className="text-gray-500 ">No In Progress tasks available.</p>
      ) : (
        tasks.map((task, key) => (
          <Alltask
            task={task}
            taskkey={key}
            list={["Complete","To Do"]}
            recolor={"bg-blue-400"}
          />
        ))
      )}
    </>
  );
};

export default InProgress;
