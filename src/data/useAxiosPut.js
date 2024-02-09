import { useState } from 'react';
import axios from 'axios';

const useAxiosPut = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const putData = async (url, data = {}) => {
        setIsLoading(true);
        try {
            const token = localStorage.getItem('id_token');
            const result = await axios.put(url, {}, {
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

    return { response, error, isLoading, putData };
};

export default useAxiosPut;