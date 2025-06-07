const TaskItem = ({ task, toggleComplete, handleDelete }) => {
  return (
    <li
      className="flex justify-between items-center mb-2 border p-2 rounded hover:bg-gray-100 transition"
    >
      <span
        onClick={() => toggleComplete(task)}
        className={
          task.completed
            ? "line-through text-gray-500 cursor-pointer"
            : "cursor-pointer"
        }
      >
        {task.title}
      </span>
      <button
        onClick={() => handleDelete(task._id)}
        className="bg-red-500 text-white px-2 py-1 text-sm rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
