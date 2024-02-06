import { Card, CardContent, Typography } from '@mui/material';
import { useParams } from "react-router-dom";
import useAxiosFetch from "../../data/useAxiosFetch";
import config from "../../config";

const PropertyDetail = () => {

    const { id } = useParams();
    const { data, error, isLoading } = useAxiosFetch(config.apiUrl + '/property/' + id);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    {data?.title}
                </Typography>
                {/* Add the rest of the property details here */}
            </CardContent>
        </Card>
    );
};

export default PropertyDetail;