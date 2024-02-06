import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useAxiosFetch from "../../data/useAxiosFetch";
import config from "../../config";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'propertyType', headerName: 'Property Type', width: 150 },
    { field: 'propertyStatus', headerName: 'Status', width: 120 },
    { field: 'bedrooms', headerName: 'Bedrooms', type: 'number', width: 110 },
    { field: 'price', headerName: 'Price', type: 'number', width: 120 },
    {
        field: 'view',
        headerName: 'View',
        sortable: false,
        width: 150,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            const property = params.row;
            return (
                <Link
                    to={{
                        pathname: `/properties/${property.id}`,
                    }}
                >
                    <Button variant="contained" color="primary">
                        View Details
                    </Button>
                </Link>
            );
        },
    },

];

const PropertyListing = () => {
    const { data, error, isLoading } = useAxiosFetch(config.apiUrl+'/property');

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data || []}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}

export default PropertyListing;
