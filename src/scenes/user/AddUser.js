import React, { useRef } from 'react';
import {Button, TextField, Grid, Typography, Box, Select, MenuItem} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from "../../config";

const AddUser = () => {
  const userRef = useRef({
    id: '',
    name: '',
    email: '',
    userType: '',
    username: '',
    password: '',
    telephone: '',
    physicalAddress: ''
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    userRef.current = { ...userRef.current, [e.target.name]: e.target.value };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(config.apiUrl + '/user', userRef.current);
      navigator('/user');
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
      <Box
          component="form"
          sx={{width: '75%'}}
          noValidate
          autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">User Details</Typography>
              <TextField name="name" label="Name" onChange={handleChange} fullWidth sx={{ my:1 }}/>
              <TextField name="email" label="Email" onChange={handleChange} fullWidth sx={{ my:1 }}/>
              <Select
                name="userType"
                label="User Type"
                onChange={handleChange}
                fullWidth
                defaultValue="CUSTOMER"
                sx={{ my:1 }}
              >
                <MenuItem value="ADMIN">Admin</MenuItem>
                <MenuItem value="CUSTOMER">Customer</MenuItem>
                <MenuItem value="OWNER">User</MenuItem>
              </Select>
              <TextField name="username" label="Username" onChange={handleChange} fullWidth sx={{ my:1 }}/>
              <TextField name="password" label="Password" type="password" onChange={handleChange} fullWidth sx={{ my:1 }}/>
              <TextField name="telephone" label="Telephone" onChange={handleChange} fullWidth sx={{ my:1 }}/>
              <TextField name="physicalAddress" label="Physical Address" onChange={handleChange} fullWidth sx={{ my:1 }}/>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
      </Box>
  );
};

export default AddUser;