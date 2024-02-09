import { useState } from 'react';
import axios from 'axios';

const useAxiosPush = (url, data) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const pushData = async () => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem('id_token');
            const result = await axios.post(url, data, {
                headers: {
                    'Authorization': `Bearer ${token}` // Add token to the request header
                }
            });
            setResponse(result.data);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    return { response, error, isLoading, pushData };
};

export default useAxiosPush;