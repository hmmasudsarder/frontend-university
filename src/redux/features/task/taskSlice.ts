import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface initialState {
    tasks: ITask[];
    filter: "all" | "complate" | "incomplate";
}
const initialState: initialState = {
    tasks: [
        {
        id: "addfdf",
        title: "Task one title",
        description: "Create Home Page and routing",
        dueDate: "2021-09-30",
        isComplate: false,
        priority: "High"
    },
        {
        id: "addfdf",
        title: "Task two title",
        description: "Create Home Page and routing two",
        dueDate: "2021-09-30",
        isComplate: false,
        priority: "Low"
    }
],
    filter: "all"
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = action.payload
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer;