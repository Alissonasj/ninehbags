async function getProducts() {
    const response = await fetch(`http://localhost:3000/products`);
        
    const data = await response.json();

    return data;
}

export default getProducts;
