// src/App.jsx
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyLearning from "./pages/MyLearning";
import Home from "./pages/Home";
import { AuthProvider, AuthContext } from "./context/authContext";



const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">E-LearnPro</Link>
      <div className="space-x-4">
        <Link to="/courses" className="hover:underline">Courses</Link>
        {isAuthenticated ? (
          <>
            <Link to="/my-learning" className="hover:underline">My Learning</Link>
            <button onClick={logout} className="hover:underline ml-2">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/register" className="hover:underline ml-2">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/my-learning" /> : <Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/my-learning" element={isAuthenticated ? <MyLearning /> : <Navigate to="/login" />} />
    </Routes>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;
