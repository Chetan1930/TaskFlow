import { useState } from "react";            // Manage form input
import axios from "axios";                   // HTTP requests
import { useNavigate } from "react-router-dom"; // Navigation

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });  // Update form data

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, form);
    alert("Registered successfully!");
    navigate("/login");
  } catch (err) {
    alert(err.response?.data?.message || "Registration failed");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Register;
