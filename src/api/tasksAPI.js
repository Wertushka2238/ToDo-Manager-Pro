const STORAGE_KEY = "todo_manager_pro_tasks";

export function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function addTask(task) {
  const tasks = getTasks();
  const newTasks = [...tasks, task];
  saveTasks(newTasks);
  return newTasks;
}

export function deleteTask(id) {
  const tasks = getTasks();
  const filtered = tasks.filter(t => t.id !== id);
  saveTasks(filtered);
  return filtered;
}

export function updateTask(updatedTask) {
  const tasks = getTasks();
  const result = tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
  saveTasks(result);
  return result;
}