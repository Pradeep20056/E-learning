import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Button, TextField, Container, Typography, Paper } from "@mui/material";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // simulate login
    navigate("/my-learning");
  };

  return (
    <Container maxWidth="sm" className="mt-12">
      <Paper elevation={3} className="p-6 dark:bg-gray-800 dark:text-white">
        <Typography variant="h4" className="mb-4 text-center">Login</Typography>
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
            Login
          </Button>
        </form>
        <Typography variant="body2" className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
