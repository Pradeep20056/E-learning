// src/pages/CourseDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { courseData } from "./Courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData.find(course => course.id === id);

  if (!course) {
    return <div className="p-10 text-red-600">Course not found!</div>;
  }

  return (
    <div className="p-6 min-h-screen dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        {course.title}
      </h2>
      <p className="text-lg mb-6 dark:text-white">{course.fullDescription}</p>

      <div className="mb-6">
        <iframe
          width="100%"
          height="400"
          src={course.videoUrl}
          title={course.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default CourseDetail;
