import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useParams } from "react-router-dom";
import useAxiosFetch from "../../data/useAxiosFetch";
import config from "../../config";
import {useEffect, useState} from 'react';

const UserDetail = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useAxiosFetch(config.apiUrl + '/user/' + id);
    const [formData, setFormData] = useState({});

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
        console.log("Remove user");
    };

    const handleSaveChanges = () => {
        // You can implement the save changes functionality here
        console.log("Save changes");
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
                    User Details
                </Typography>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="username"
                            label="Username"
                            value={formData.username}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="firstName"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="lastName"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button variant="outlined" onClick={handleRemove}>Remove User</Button>
                        <Button variant="contained" onClick={handleSaveChanges}>Save Changes</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default UserDetail;