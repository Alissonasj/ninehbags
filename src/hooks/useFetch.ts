import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [dataFecth, setDataFecth] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(url);
            console.log(response.ok);

            const data = await response.json();
            console.log(data);

            setDataFecth(data);
        })();
    }, [url]);

    return { dataFecth };
};

export default useFetch;
