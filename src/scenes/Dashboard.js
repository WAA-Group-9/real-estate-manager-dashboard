import React from 'react';
import { Grid } from '@mui/material';
import SummaryItem from '../components/SummaryItem'
import { mockData } from '../data/mockData';

const Dashboard = () => {
  const numUsers = mockData.length; // replace with actual data
  const numOwners = mockData.filter(item => item.owner.userType === 'OWNER').length; // replace with actual data
  const numProperties = mockData.length; // replace with actual data
  const numOffers = mockData.reduce((total, item) => total + item.priceHistory.length, 0); // replace with actual data

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryItem title="Users" count={numUsers} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryItem title="Owners" count={numOwners} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryItem title="Properties" count={numProperties} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryItem title="Offers" count={numOffers} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;