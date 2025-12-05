import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

const Login = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      username: data.get('username'),
      password: data.get('password'),
      remember: data.get('remember') === 'on',
    };
    console.log('Submit:', payload);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', maxWidth: '100vw', bgcolor: '#f3f4f6', p: 2 }}
    >
      <Grid item xs={12} sm={10} md={4} lg={3}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h5" component="h1">
              Sign in to Jobcard
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Enter your credentials to continue
            </Typography>
          </Box>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField name="username" label="Username" required fullWidth autoComplete="username" />
            <TextField name="password" label="Password" type="password" required fullWidth autoComplete="current-password" />

            <FormControlLabel control={<Checkbox name="remember" defaultChecked />} label="Remember me" />

            <Button type="submit" variant="contained" fullWidth>
              Sign in
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;