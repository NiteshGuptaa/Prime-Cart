import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';

const Category = () => {
    // State to store the list of products
    const [products, setProducts] = useState([]);
    // Get the category name from the URL parameters
    const { category_name } = useParams();

    // Fetch data whenever the category name changes
    useEffect(() => {
        fetchData();
    }, [category_name]);

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await fetch(`https://dummyjson.com/products/category/${category_name}`);
            const json = await response.json();

            if (json.products) {
                setProducts(json.products);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setProducts([]);
        }
    };

        return (
            <div className='mt-20 mx-3 grid grid-cols-1 gap-x-6 gap-y-8 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {/* Render each product */}
                {products.map((product) => {
                    return <Item key={product.id} product={product} />
                })}
            </div>
        );
        
};

export default Category;
