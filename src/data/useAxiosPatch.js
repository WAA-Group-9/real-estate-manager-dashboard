import { useState } from 'react';
import axios from 'axios';

const useAxiosPatch = (url, data) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const patchData = async () => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem('id_token');
            const result = await axios.patch(url, data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setResponse(result.data);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
        }
    };

    return { response, error, isLoading, patchData };
};

export default useAxiosPatch;