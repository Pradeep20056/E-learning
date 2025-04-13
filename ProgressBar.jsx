import { LinearProgress, Box, Typography } from '@mui/material';

export default function ProgressBar({ value }) {
  return (
    <Box className="mt-2">
      <Typography variant="body2" color="textSecondary">Progress: {value}%</Typography>
      <LinearProgress variant="determinate" value={value} />
    </Box>
  );
}
