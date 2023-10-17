async function myFecth<T>(endPoint: string) {
    try {
        const response = await fetch(`http://localhost:3000/${endPoint}`);

        const data: T = await response.json();

        return data;
    } catch (error) {
        console.log("ERRO => ", error);
        
    }
}

export default myFecth;
