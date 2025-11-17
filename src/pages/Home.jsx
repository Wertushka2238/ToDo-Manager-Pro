import { useState } from "react";
import useTasks from "../hooks/useTasks";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import TaskList from "../components/TaskList";

export default function Home() {
  const { tasks, remove, update } = useTasks();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filtered = tasks.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase()) &&
    (categoryFilter === "all" || t.category === categoryFilter)
  );

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <Filters value={categoryFilter} onChange={setCategoryFilter} />
      <TaskList tasks={filtered} remove={remove} update={update} />
    </div>
  );
}