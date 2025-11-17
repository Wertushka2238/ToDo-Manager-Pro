import TaskItem from "./TaskItem";

export default function TaskList({ tasks, remove, update }) {
  if (!tasks.length) return <p>Завдань не знайдено 😢</p>;

  return (
    <div className="task-list">
      {tasks.map(task =>
        <TaskItem key={task.id} task={task} remove={remove} update={update} />
      )}
    </div>
  );
}