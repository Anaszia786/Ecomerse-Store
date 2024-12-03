import React, { useState } from "react";
import { useSelector } from "react-redux";
import Alltask from "../../common/alltask";

const TaskComplete = () => {
  const tasks = useSelector((state) => state.tasks.complete) || [];

  return (
    <>
      {tasks.length === 0 ? (
        <p className="text-gray-500 ">No Complete tasks Yet.</p>
      ) : (
        tasks.map((task, key) => (
          <Alltask task={task} key={key} recolor={"bg-green-500"} list={["In Progress"]} />
        ))
      )}
    </>
  );
};

export default TaskComplete;
