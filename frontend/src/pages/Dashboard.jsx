import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) fetchProjects(); 
  }, [user]);
 
  const fetchProjects = async () => {
    try {
      const res = await axios.get("`${import.meta.env.VITE_API_BASE_URL}api/projects`", {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      console.log('API Response:', res.data);
      // Ensure projects is always an array
      setProjects(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]); // Set to empty array on error
    }
  };

  const handleCreate = async () => {
    const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/projects`, { name, description: desc }, {
      headers: { Authorization: `Bearer ${user.token}` }
    });
    setProjects([...projects, res.data]);
    setName(""); setDesc("");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Your Projects</h2>
      <div className="my-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          className="border p-2 mr-2"
        />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="border p-2 mr-2"
        />
        <button onClick={handleCreate} className="bg-blue-600 text-white p-2">Create</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
