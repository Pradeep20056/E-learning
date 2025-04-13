import { AppBar, Toolbar, Typography, Button, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <AppBar position="static" className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-blue-600 dark:text-white font-bold">
          E-Learn
        </Typography>
        <div className="flex items-center gap-4">
          <Link to="/"><Button>Home</Button></Link>
          <Link to="/courses"><Button>Courses</Button></Link>
          <Link to="/my-learning"><Button>My Learning</Button></Link>

          {/* THE SWITCH (DARK MODE TOGGLE) */}
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="default"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
