import { useState } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "../api/tasksAPI";

export default function useTasks() {
  const [tasks, setTasks] = useState(() => getTasks());

  const create = (task) => setTasks(addTask(task));
  const remove = (id) => setTasks(deleteTask(id));
  const update = (task) => setTasks(updateTask(task));

  return { tasks, create, remove, update };
}