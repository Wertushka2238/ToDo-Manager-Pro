import { useState } from "react";
import useTasks from "../hooks/useTasks";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {
  const { create } = useTasks();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    category: "general",
    deadline: "",
    description: "",
  });

  const onChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    create({
      ...form,
      id: Date.now(),
      completed: false,
    });
    navigate("/");
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Створити нове завдання</h2>

      <input name="title" placeholder="Назва" required value={form.title} onChange={onChange} />

      <select name="category" value={form.category} onChange={onChange}>
        <option value="general">Загальне</option>
        <option value="study">Навчання</option>
        <option value="work">Робота</option>
        <option value="personal">Особисте</option>
      </select>

      <input type="date" name="deadline" value={form.deadline} onChange={onChange} />

      <textarea name="description" placeholder="Опис" value={form.description} onChange={onChange}></textarea>

      <button type="submit">Створити</button>
    </form>
  );
}