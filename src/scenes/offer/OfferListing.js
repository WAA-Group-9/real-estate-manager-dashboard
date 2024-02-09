import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {Button} from '@mui/material';
import useAxiosFetch from "../../data/useAxiosFetch";
import config from "../../config";
import {useParams} from "react-router-dom";




const columns = [
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'propertyId', headerName: 'Property ID', width: 200 },
    { field: 'offerAmount', headerName: 'Offer Amount', width: 200 },
    { field: 'offerDate', headerName: 'Offer Date', width: 200 },
    { field: 'offerStatus', headerName: 'Offer Status', width: 200 },
    { field: 'offerDescription', headerName: 'Offer Description', width: 200 },
    {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 200,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            const offer = params.row;
            return (
                <div>
                    <Button variant="contained" color="primary" onClick={() => handleAccept(offer)}>
                        Accept
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleReject(offer)}>
                        Reject
                    </Button>
                </div>
            );
        }
    },
];



const handleAccept = (offer) => {
    // Handle accept action here
    console.log("Accept offer", offer);
};

const handleReject = (offer) => {
    // Handle reject action here
    console.log("Reject offer", offer);
};

const OfferListing = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useAxiosFetch(config.apiUrl + id + '/offers');

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

export default OfferListing;