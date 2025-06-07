import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 border rounded shadow cursor-pointer hover:shadow-md transition"
      onClick={() => navigate(`/projects/${project._id}`)}
    >
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="text-gray-600 mt-1">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
