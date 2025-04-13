// src/pages/Courses.jsx
import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const courseData = [
  {
    id: "1",
    title: "Frontend Development",
    category: "Frontend",
    description: "Learn React, HTML, CSS, JavaScript, and UI libraries.",
    image: "https://source.unsplash.com/featured/?frontend",
    fullDescription: "Master frontend with React, Tailwind, Material UI & more.",
    videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8"
  },
  {
    id: "2",
    title: "Backend Development",
    category: "Backend",
    description: "Node.js, Express, MongoDB, APIs, and more.",
    image: "https://source.unsplash.com/featured/?backend",
    fullDescription: "Build backend APIs and server-side logic using Node & Express.",
    videoUrl: "https://www.youtube.com/embed/Oe421EPjeBE"
  },
  {
    id: "3",
    title: "Web Development",
    category: "WebDev",
    description: "Full-stack journey from basics to MERN stack.",
    image: "https://source.unsplash.com/featured/?webdev",
    fullDescription: "Learn HTML, CSS, JavaScript, React, Node, and more.",
    videoUrl: "https://www.youtube.com/embed/zJSY8tbf_ys"
  },
  {
    id: "4",
    title: "Data Science",
    category: "DataScience",
    description: "Python, Pandas, NumPy, ML, and real-world projects.",
    image: "https://source.unsplash.com/featured/?datascience",
    fullDescription: "Analyze data, build ML models & visualize insights.",
    videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ"
  },
];

const categories = ["All", "Frontend", "Backend", "WebDev", "DataScience"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredCourses = selectedCategory === "All"
    ? courseData
    : courseData.filter(course => course.category === selectedCategory);

  return (
    <div className="p-6 min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">Explore Courses</h1>

      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-md dark:bg-gray-800 dark:text-white">
              <CardMedia
                component="img"
                height="180"
                image={course.image}
                alt={course.title}
              />
              <CardContent>
                <Typography variant="h6">{course.title}</Typography>
                <Typography variant="body2" className="dark:text-gray-300">
                  {course.description}
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  className="mt-3"
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
