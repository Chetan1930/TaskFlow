import './App.css';
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProjectView from "./pages/ProjectView";
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { useAuth } from "./context/AuthContext"; // Auth context


function App() {
  const { user } = useAuth();  // Get current user (if logged in)
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}  // Protected route
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/projects/:id" element={<ProjectView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;