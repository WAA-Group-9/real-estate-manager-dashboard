import {Button, Chip, Grid, Paper, TextField, Typography} from '@mui/material';
import { useParams } from "react-router-dom";
import useAxiosFetch from "../../data/useAxiosFetch";
import useAxiosPut from "../../data/useAxiosPut";
import config from "../../config";
import {useEffect, useState} from 'react';

const PropertyDetail = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useAxiosFetch(config.apiUrl + '/properties/' + id);
    const [formData, setFormData] = useState({});
    const [putResponse, setPutResponse] = useState(null);
    const [putError, setPutError] = useState(null);


    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRemove = () => {
        // You can implement the remove functionality here
        console.log("Remove property");
    };

    const handleSaveChanges = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useAxiosPut(config.apiUrl + '/properties/' + id, formData)
            .then(response => {
                setPutResponse(response.data);
                console.log("Changes saved");
            })
            .catch(error => {
                setPutError(error);
                console.log("Error saving changes");
            });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Paper elevation={3} sx={{ padding: 10, margin: 3 }}>
                <Typography variant="h3" component="div">
                    Property Details
                </Typography>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="title"
                            label="Title"
                            value={formData.title}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="description"
                            label="Description"
                            value={formData.description}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="propertyType"
                            label="Property Type"
                            value={formData.propertyType}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="propertyStatus"
                            label="Property Status"
                            value={formData.propertyStatus}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="listingDate"
                            label="Listing Date"
                            value={formData.listingDate}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="bedrooms"
                            label="Bedrooms"
                            type="number"
                            value={formData.bedrooms}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="totalArea"
                            label="Total Area"
                            type="number"
                            value={formData.totalArea}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="lotSize"
                            label="Lot Size"
                            type="number"
                            value={formData.lotSize}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="price"
                            label="Price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="currency"
                            label="Currency"
                            value={formData.currency}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button variant="outlined" onClick={handleRemove}>Remove Property</Button>
                        <Button variant="contained" onClick={handleSaveChanges}>Save Changes</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default PropertyDetail;
