import axios from 'axios';
import { useEffect, useState } from 'react';

const instanceAxios = axios.create({
    baseURL: 'http://localhost:5000/',
});

const useApi = (url: string) => {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const handleApi = async () => {
            try {
                const response = await instanceAxios.get(url, {
                    signal: controller.signal,
                });

                setDataApi(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        handleApi();

        return () => {
            controller.abort();
        };
    }, []);

    return dataApi;
};

export default useApi;
