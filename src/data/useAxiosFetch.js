import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, isLoading };
};

export default useAxiosFetch;