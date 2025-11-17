import { useParams, useNavigate } from "react-router-dom";
import useTasks from "../hooks/useTasks";

const CATEGORY_LABELS = {
  general: "загальне",
  study: "навчання",
  work: "робота",
  personal: "особисте",
};

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) return <p>Завдання не знайдено</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>
        <b>Категорія:</b> {CATEGORY_LABELS[task.category] || task.category}
      </p>
      <p>
        <b>Кінцевий термін:</b>{" "}
        {task.deadline
          ? new Date(task.deadline).toLocaleDateString("uk-UA")
          : "—"}
      </p>

      <p>
        <b>Опис:</b>
      </p>
      <p>{task.description || "Без опису"}</p>

      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}
