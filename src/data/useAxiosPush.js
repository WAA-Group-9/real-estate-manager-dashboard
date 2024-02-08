import { useState } from 'react';
import axios from 'axios';

const useAxiosPush = (url, data) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const pushData = async () => {
        setIsLoading(true);
        try {
            const result = await axios.post(url, data);
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