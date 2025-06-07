import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const ProjectView = () => {
  const { id } = useParams(); // project ID
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/tasks/${id}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setTasks(res.data);
  };

  const handleAdd = async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/tasks`,
      { title, project: id },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const toggleComplete = async (task) => {
    const res = await axios.put(
      `${import.meta.env.VITE_API_BASE_URL}tasks/${task._id}`,
      { completed: !task.completed },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
  };

  const handleDelete = async (taskId) => {
    await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setTasks(tasks.filter((t) => t._id !== taskId));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <div className="mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
          className="border p-2 mr-2"
        />
        <button onClick={handleAdd} className="bg-green-600 text-white p-2">
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectView;
