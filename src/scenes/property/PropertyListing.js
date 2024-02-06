import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'propertyType', headerName: 'Property Type', width: 150 },
    { field: 'propertyStatus', headerName: 'Status', width: 120 },
    { field: 'bedrooms', headerName: 'Bedrooms', type: 'number', width: 110 },
    { field: 'price', headerName: 'Price', type: 'number', width: 120 },
];

const rows = [
    { id: 1, title: 'Beautiful Villa', propertyType: 'Villa', propertyStatus: 'For Sale', bedrooms: 4, price: 500000 },
    { id: 2, title: 'Cozy Apartment', propertyType: 'Apartment', propertyStatus: 'For Rent', bedrooms: 2, price: 1500 },
    { id: 3, title: 'Spacious House', propertyType: 'House', propertyStatus: 'For Sale', bedrooms: 5, price: 700000 },
    { id: 4, title: 'Luxury Condo', propertyType: 'Condo', propertyStatus: 'For Sale', bedrooms: 3, price: 800000 },
    { id: 5, title: 'Charming Cottage', propertyType: 'Cottage', propertyStatus: 'For Rent', bedrooms: 1, price: 1000 },
];

const PropertyListing = () => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}

export default PropertyListing;
