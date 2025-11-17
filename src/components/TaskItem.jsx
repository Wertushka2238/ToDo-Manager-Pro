import { Link } from "react-router-dom";

const CATEGORY_LABELS = {
  general: "загальне",
  study: "навчання",
  work: "робота",
  personal: "особисте",
};

export default function TaskItem({ task, remove, update }) {
  return (
    <div className={`task ${task.completed ? "done" : ""}`}>
      <div>
        <h3>{task.title}</h3>
        <p>Категорія: {CATEGORY_LABELS[task.category] || task.category}</p>
        {task.deadline && (
          <p>
            Кінцевий термін:{" "}
            {task.deadline
              ? new Date(task.deadline).toLocaleDateString("uk-UA")
              : "—"}
          </p>
        )}
      </div>

      <div className="task-buttons">
        <button onClick={() => update({ ...task, completed: !task.completed })}>
          {task.completed ? "Скасувати" : "Готово"}
        </button>

        <Link to={`/task/${task.id}`} className="details">
          Деталі
        </Link>

        <button className="delete" onClick={() => remove(task.id)}>
          Видалити
        </button>
      </div>
    </div>
  );
}
