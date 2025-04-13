import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-tr from-blue-100 to-white dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-5xl font-bold mb-4 text-blue-700 dark:text-white">Welcome to E-LearnPro</h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">Learn new skills, track your progress, and level up your career.</p>
      <Link to="/courses">
        <Button variant="contained" size="large" color="primary">Browse Courses</Button>
      </Link>
    </div>
  );
};

export default Home;
