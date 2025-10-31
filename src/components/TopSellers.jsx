import React, { useContext, useEffect, useState } from 'react'
// import { Shopcontext } from '../Context/ShopContext'
import Item from './Item'

const TopSellers = () => {
    // State to store all products
    const [all_product, setAllProducts] = useState([]);

    // Fetch data when the component mounts
    useEffect(() => {
      fetchData();
    }, [])

    // Function to fetch product data from the API
    const fetchData = async () => {
      const data = await fetch("https://dummyjson.com/products")
      const json = await data.json();
      setAllProducts(json.products);
      return json;  
    }

    return (
      <div className='mx-auto max-w-2xl px-4 py-10 sm:pt-16 lg:max-w-7xl lg:px-8'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>Top Products</h2>
        <p className=' text-gray-700 text-center mt-3 md:px-56'>Discover everything you need in one place! From stylish clothing and trendy accessories to cutting-edge electronics, sleek kitchen gadgets, stunning jewellery, and even cars and motorcycles—our app brings you the best of every category. Whether you're upgrading your wardrobe, revamping your home, or treating yourself to something special, we’ve got you covered. Shop with confidence and enjoy the perfect blend of quality, style, and convenience. Start exploring now!</p>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {all_product.slice(0, 20).map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
    )
}

export default TopSellers
