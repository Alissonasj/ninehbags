import Product from "@myTypes/product";
import myFecth from "./myFetch";

async function getProducts() {
    const products =  await myFecth<Product[]>("products");    
    
    return products;
}

export default getProducts;
