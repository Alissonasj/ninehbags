import axios from 'axios';
import { useEffect, useState } from 'react';

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3000/',
});

const useApi = (url: string) => {
    const [dataApi, setDataApi] = useState([]);

    const handleApi = async () => {
        try {
            const response = await instanceAxios.get(url);

            setDataApi(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleApi();
    }, []);

    return dataApi;
};

export default useApi;
