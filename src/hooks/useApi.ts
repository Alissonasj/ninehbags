import axios from 'axios';
import { useEffect, useState } from 'react';

interface ConfigAxios {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    params?: {
        _limit?: number;
        _page?: number;
    };
}

const useApi = (config: ConfigAxios) => {
    const [dataApi, setDataApi] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                const response = await axios({
                    baseURL: 'http://localhost:5000/',
                    signal: controller.signal,
                    ...config,
                });

                setDataApi(response.data);
            } catch (error) {
                console.log(error);
            }
        })();

        return () => {
            controller.abort();
        };
    }, []);

    return dataApi;
};

export default useApi;
