import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load user from localStorage on app start
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Login method: saves user and token
  const login = (userData, authToken) => {
    const fullUser = { ...userData, token: authToken }; // ✅ attach token to user object
    setUser(fullUser);
    localStorage.setItem("user", JSON.stringify(fullUser));
  };

  // Logout method: clears everything
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing AuthContext
export const useAuth = () => useContext(AuthContext);