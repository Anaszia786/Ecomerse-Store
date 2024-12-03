import Bars from "../common/bars";
import InProgress from "../components/todo/InProgress";
import TaskComplete from "../components/todo/taskComplete";
import Tasks from "../components/todo/tasks";

function Todo() {
  return (
    <>
      <h3 className="text-center text-3xl font-bold text-blue-500  py-6">
        Task Management
      </h3>
      <div className="grid grid-cols-3 gap-4 px-10 ">
        <div>
          <Bars title={"TO DO"} recolor={"bg-[#e9ebee]"} color={'text-[#44546f]'} />
          <Tasks />
        </div>
        <div>
          <Bars title={"IN PROGRESS"} recolor={"bg-[#e9f2ff]"} color={'text-[#0055CC]'}  />
          <InProgress />
        </div>
        {/* <div>
          <Bars title={"IN REVIEW"} recolor={"bg-green-600"}  />
          <TaskComplete />
        </div> */}
        <div>
          <Bars title={"COMPLETE"}  recolor={"bg-[#dcfff1]"} color={'text-[#216E4E]'}  />
          <TaskComplete />
        </div>
      </div>
    </>
  );
}

export default Todo;
