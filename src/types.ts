export interface ITask {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isComplate: boolean;
    priority: "High" | "Medium" | "Low";
}