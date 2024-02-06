import React, { useRef } from 'react';
import {Button, TextField, Grid, Paper, Checkbox, FormControlLabel, Box, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from "../../config";

const AddProperty = () => {
  const propertyRef = useRef({
    title: '',
    description: '',
    propertyType: '',
    propertyStatus: '',
    listingDate: '',
    address: {
      city: '',
      state: '',
      zipCode: '',
      country: '',
      latitude: '',
      longitude: ''
    },
    bedrooms: '',
    totalArea: '',
    lotSize: '',
    amenities: {
      hasSwimmingPool: false,
      hasGarden: false,
      hasGarage: false
    },
    priceHistory: [],
    currency: '',
    owner: {
      id: '',
      name: '',
      email: '',
      userType: '',
      username: '',
      password: '',
      telephone: '',
      physicalAddress: ''
    }
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    propertyRef.current = { ...propertyRef.current, [e.target.name]: e.target.value };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(config.apiUrl + '/property', propertyRef.current);
      navigator('/property');
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
              <Typography variant="h6">Property Details</Typography>
              <TextField name="title" label="Title" onChange={handleChange} fullWidth/>
              <TextField name="description" label="Description" onChange={handleChange} fullWidth/>
              <TextField name="propertyType" label="Property Type" onChange={handleChange} fullWidth/>
              <TextField name="propertyStatus" label="Property Status" onChange={handleChange} fullWidth/>
              <TextField name="listingDate" label="Listing Date" type="date" InputLabelProps={{shrink: true}}
                         onChange={handleChange} fullWidth/>
              <TextField name="bedrooms" label="Bedrooms" type="number" onChange={handleChange} fullWidth/>
              <TextField name="totalArea" label="Total Area" type="number" onChange={handleChange} fullWidth/>
              <TextField name="lotSize" label="Lot Size" type="number" onChange={handleChange} fullWidth/>
              <TextField name="currency" label="Currency" onChange={handleChange} fullWidth/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6">Address</Typography>
              <TextField name="address.city" label="City" onChange={handleChange} fullWidth/>
              <TextField name="address.state" label="State" onChange={handleChange} fullWidth/>
              <TextField name="address.zipCode" label="Zip Code" onChange={handleChange} fullWidth/>
              <TextField name="address.country" label="Country" onChange={handleChange} fullWidth/>
              <TextField name="address.latitude" label="Latitude" onChange={handleChange} fullWidth/>
              <TextField name="address.longitude" label="Longitude" onChange={handleChange} fullWidth/>

              <Typography variant="h6">Amenities</Typography>
              <FormControlLabel control={<Checkbox name="amenities.hasSwimmingPool" onChange={handleChange}/>}
                                label="Has Swimming Pool"/>
              <FormControlLabel control={<Checkbox name="amenities.hasGarden" onChange={handleChange}/>}
                                label="Has Garden"/>
              <FormControlLabel control={<Checkbox name="amenities.hasGarage" onChange={handleChange}/>}
                                label="Has Garage"/>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </form>
      </Box>
  );
};

export default AddProperty;