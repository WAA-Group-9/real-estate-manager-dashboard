import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button, Chip} from '@mui/material';
import useAxiosFetch from "../../data/useAxiosFetch";
import config from "../../config";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'userType',
        headerName: 'User Type',
        width: 150,
        renderCell: (params) => (
            <Chip label={params.value} variant="outlined" />
        ),
    },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'telephone', headerName: 'Telephone', width: 150 },
    {
        field: 'view',
        headerName: 'View',
        sortable: false,
        width: 150,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            const user = params.row;
            return (
                <Button href={`/users/${user.id}`} variant="contained" color="primary">
                    View Details
                </Button>
            );
        }
    },
];

const UserListing = () => {
    const { data, error, isLoading } = useAxiosFetch(config.apiUrl + '/user');

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
                disableSelectionOnClick
            />
        </Box>
    );
}

export default UserListing;
