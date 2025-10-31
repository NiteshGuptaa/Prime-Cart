import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Item from '../components/Item';

const ExploreProduts = () => {
    // State to store all products
    const [allProducts, setAllProducts] = useState([]);
    // console.log("explore products page")

    useEffect(() => {
        // Function to fetch products from API
        const fetchProducts = async () => {
            // console.log("fetching products")
            const data = await fetch('https://dummyjson.com/products?limit=50&skip=0')
            const products = await data.json();
            const res = products.products
            // console.log(res)
            setAllProducts(res);
        }

        // Fetch products on component mount
        fetchProducts();
    }, [])
    return (
        <div>
            {
                allProducts &&
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                    {/* Render each product */}
                    {allProducts.map((product) => {
                        return <Item key={product.id} product={product} />
                    })}
                </div>

            }
        </div>
    )
}

export default ExploreProduts
