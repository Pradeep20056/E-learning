import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, TextField, Container, Typography, Paper } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" className="mt-12">
      <Paper elevation={3} className="p-6 dark:bg-gray-800 dark:text-white">
        <Typography variant="h4" className="mb-4 text-center">Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            variant="outlined"
            margin="normal"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Button type="submit" fullWidth variant="contained" className="mt-4">
            Register
          </Button>
        </form>
        <Typography variant="body2" className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
