import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}
const TasksCard = ({ task }: IProps) => {
  return (
    <div className="border px-5 py-3 rounded-md">
      <>
        <div className="flex gap-4 items-center justify-between">
          <div className="flex gap-5 items-center">
            <div
              className={cn("size-3 rounded-full", {
                "bg-green-500": task.priority === "Low",
                "bg-red-500": task.priority === "High",
                "bg-yellow-500": task.priority === "Medium",
              })}
            ></div>
            <h1>{task.title}</h1>
          </div>
          <div className="flex gap-3 items-center justify-center ">
            <Button variant="link" className="p-0 text-red-500">
              <Trash2 />
            </Button>
            <Checkbox />
          </div>
        </div>
        <p className="mt-5">{task.description}</p>
      </>
    </div>
  );
};

export default TasksCard;
