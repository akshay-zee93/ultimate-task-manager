import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  taskCompleted: 0,
  taskPending: 0,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    taskAdded: (state, action) => {
      const { title, description, dueDate, priority, completed } =
        action.payload;
      state.tasks.push({
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
        completed,
      });
      state.taskPending = +state.taskPending + 1;
    },
    taskUpdate: (state, action) => {
      const { id, title, description, dueDate, priority } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;
        existingTask.dueDate = dueDate;
        existingTask.priority = priority;
      }
    },
    taskDelete: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => {
        if (task.id !== id) {
          return task;
        } else {
          task.completed ? state.taskCompleted-- : state.taskPending--;
        }
      });
    },
    taskStatusUpdate: (state, action) => {
      const { id } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
        if (existingTask.completed) {
          state.taskCompleted++;
          state.taskPending--;
        } else {
          state.taskPending++;
          state.taskCompleted--;
        }
      }
    },
  },
});

export const { taskAdded, taskUpdate, taskDelete, taskStatusUpdate } =
  tasksSlice.actions;

export default tasksSlice.reducer;
