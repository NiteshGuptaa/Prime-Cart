import React, { useEffect, useState } from 'react';

// Custom hook to fetch all products
const UseAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // Fetch all products from the API
    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        setAllProducts(json.products);
        return json;
    };

    return allProducts;
}

export default UseAllProducts;
