import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Chip } from '@mui/material';
import useAxiosFetch from "../../data/useAxiosFetch";
import config from "../../config";
import { useParams } from "react-router-dom";
import axios from "axios";

const OfferListing = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useAxiosFetch(config.apiUrl + '/properties/' + id + '/offers');

    // State to hold the offer data
    const [offerData, setOfferData] = useState([]);

    // Update offerData whenever data changes
    useEffect(() => {
        setOfferData(data);
    }, [data]);

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
                        {offer.offerStatus === 'PENDING' && (
                            <>
                                <Button variant="contained" color="success" onClick={() => handleAccept(offer)}>
                                    Accept
                                </Button>
                                <Button variant="contained" color="error" onClick={() => handleReject(offer)}>
                                    Reject
                                </Button>
                            </>
                        )}
                        {offer.offerStatus === 'ACCEPTED' && <Chip label="Offer Accepted" color="success" />}
                        {offer.offerStatus === 'REJECTED' && <Chip label="Offer Rejected" color="error" />}
                        {offer.offerStatus === 'CONTINGENT' && <Chip label="Offer Contingent" color="info" />}
                    </div>
                );
            }
        },
    ];

    const handleAccept = async (offer) => {
        const url = config.apiUrl + '/offers' + `/${offer.id}/accept`;
        try {
            const token = localStorage.getItem('id_token');
            await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // Update offer status in the data array
            const updatedData = offerData.map(item => {
                if (item.id === offer.id) {
                    return { ...item, offerStatus: 'ACCEPTED' };
                }
                return item;
            });
            setOfferData(updatedData); // Update the state
        } catch (error) {
            console.log(error);
        }
    };

    const handleReject = async (offer) => {
        const url = config.apiUrl + '/offers' + `/${offer.id}/reject`;
        try {
            const token = localStorage.getItem('id_token');
            await axios.put(url, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            // Update offer status in the data array
            const updatedData = offerData.map(item => {
                if (item.id === offer.id) {
                    return { ...item, offerStatus: 'REJECTED' };
                }
                return item;
            });
            setOfferData(updatedData); // Update the state
        } catch (error) {
            // handle error
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            {error && <Chip label={`Error: ${error}`} color="error" />}
            <DataGrid
                rows={offerData || []}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
            />
        </Box>
    );
}

export default OfferListing;