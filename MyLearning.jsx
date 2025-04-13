import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const MyLearning = () => {
  return (
    <Container maxWidth="md" className="mt-12">
      <Paper elevation={3} className="p-6 dark:bg-gray-800 dark:text-white">
        <Typography variant="h4" className="mb-4 text-center">
          My Learning
        </Typography>
        <Typography variant="body1">
          Welcome! 🎓 You’ve successfully logged in. Here, you'll see your enrolled courses, progress tracking, and certificates (coming soon).
        </Typography>
      </Paper>
    </Container>
  );
};

export default MyLearning;
