import { useEffect, useState } from "react";

 const useFetch = <T>(endPoint: string, initialState: T) => {
    const [dataFecth, setDataFecth] = useState<T>(initialState);

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3000/${endPoint}`);
            console.log(response.ok);

            const data = await response.json();
            console.log(data);

            setDataFecth(data);
        })();
    }, [endPoint]);

    return dataFecth;
};

export default useFetch;
