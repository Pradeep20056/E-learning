import { Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CourseCard({ course }) {
  const [progress, setProgress] = useState(course.progress || 0);

  useEffect(() => {
    const saved = localStorage.getItem(`progress-${course.id}`);
    if (saved) {
      setProgress(parseInt(saved));
    }
  }, [course.id]);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
      <CardContent>
        <Typography variant="h6" className="mb-2 dark:text-white">
          {course.title}
        </Typography>
        <Typography variant="body2" className="text-gray-600 dark:text-gray-400 mb-4">
          Progress: {progress}%
        </Typography>
        <div className="flex gap-2">
          <Link to={`/course/${course.id}`}>
            <Button size="small" variant="contained" color="primary">Watch</Button>
          </Link>
          <Link to={`/course/${course.id}/details`}>
            <Button size="small" variant="outlined">Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
