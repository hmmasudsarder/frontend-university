import { AddTask } from "@/components/modules/tasks/AddTask";
import TasksCard from "@/components/modules/tasks/TasksCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/middlear/hooks";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-28">
      <div className="">
        <h1>Task</h1>
      </div>
      <AddTask />
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
            <TasksCard key={task.id} task={task} />
        ))}
        {/* <TasksCard /> */}
      </div>
    </div>
  );
};

export default Task;
