import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [dataFecth, setDataFecth] = useState([]);

    const handleFecth = async () => {
        const response = await fetch(url);

        const data = await response.json();

        setDataFecth(data);
    };

    useEffect(() => {
        handleFecth();
    }, [url]);

    return dataFecth;
};

export default useFetch;
