import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">☑️ ToDo Manager Pro</Link>
        <Link to="/create">➕ Нове завдання</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </div>
    </div>
  );
}
