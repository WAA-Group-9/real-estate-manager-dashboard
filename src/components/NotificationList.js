import React from 'react';
import useAxiosFetch from "../data/useAxiosFetch";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import config from "../config";

const NotificationList = ({userId}) => {
    const {data: notifications, error, isLoading} = useAxiosFetch(config.apiUrl + `/notifications/user/${userId}`);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <List>
            {notifications && notifications.map((notification, index) => (
                <ListItem key={index}>
                    <ListItemText
                        primary={notification.message}
                        secondary={`Date: ${new Date(notification.dateCreated).toLocaleString()}`}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default NotificationList;