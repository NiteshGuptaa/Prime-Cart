import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from './Breadcrum'
import ProductDisplay from './ProductDisplay'
import DescriptionBox from './DescriptionBox'
import NewCollection from './NewCollection'
import UseAllProducts from '../Utils/UseAllProducts'
import TopCategory from './TopCategory'
import Carousel from './Carousel'

const SingleProduct = () => {
    // State to store the product details
    const [product, setProduct] = useState([]);
    const { productId } = useParams(); // Get the product ID from the URL

    // Fetch product data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch product data from the API
    const fetchData = async () => {
        const data = await fetch(`https://dummyjson.com/products/${Number(productId)}`);
        const json = await data.json();
        setProduct(json);
    }

    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Return null if the product data is not yet loaded
    if (product.length == 0) return null;

    return (
        <div className='max-w-7xl mx-auto mb-32 mt-32'>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox product={product} />
            {/* <NewCollection/> */}
            <Carousel product={product} />
            <TopCategory />
        </div>
    )
}

export default SingleProduct
