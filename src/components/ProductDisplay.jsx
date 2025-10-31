import { Star } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Shopcontext } from '../Context/ShopContext'
import { useDispatch } from "react-redux"
import { addItemToCart } from '../Utils/cartSlice'
import { addToWishList } from '../Utils/wishlistSlice'

const ProductDisplay = (props) => {
    const [showAddToCart, setShowAddToCart] = useState(true);
    const { product } = props;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle adding product to cart
    const HandleAddToCart = (item) => {
        if (showAddToCart) {
            setShowAddToCart(!showAddToCart);
            dispatch(addItemToCart(item))
        } else {
            navigate("/cart")
        }
    }

    // Handle adding product to wishlist
    const HanleAddToWishList = (item) => {
        dispatch(addToWishList(item))
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20 mb-1 md:gap-10 px-6 md:px-0'>
            <div className='flex md:1/2 gap-4'>
                <div className='flex flex-col gap-4 md:h-[500px]'>
                    {/* Product images */}
                </div>
                <div>
                    <img src={product?.images[0]} alt="" className='md:h-[480px]' />
                </div>
            </div>
            <div className='flex md:1/2 flex-col mt-8 md:mt-0'>
                <h1 className='text-[#3d3d3d] text-4xl font-bold'>{product.title}</h1>
                <div className='flex items-center gap-1 text-[#1c1c1c] text-lg mt-4'>
                    <Star fill='red' />
                    <Star fill='red' />
                    <Star fill='red' />
                    <Star fill='red' />
                    <Star fill='gray' />
                    <p>(122)</p>
                </div>
                <div className='flex gap-5 font-semibold items-center my-5'>
                    <div className='text-gray-500 text-2xl line-through'>$200</div>
                    <div className='text-red-500 text-3xl'>${product.price}</div>
                </div>

                <div className=''>{product.description}</div>
                <div>
                    <h1 className='font-semibold text-gray-400 text-2xl mt-4'>Select Size</h1>
                    <div className='flex gap-4 items-center my-4'>
                        <div className='border bg-gray-100 p-4'>S</div>
                        <div className='border bg-gray-100 p-4'>M</div>
                        <div className='border bg-gray-100 p-4'>L</div>
                        <div className='border bg-gray-100 p-4'>XL</div>
                        <div className='border bg-gray-100 p-4'>XXL</div>
                    </div>
                </div>

                <div className='flex flex-row gap-6'>
                    <button onClick={() => HandleAddToCart(product)} className='bg-red-500 text-white px-6 py-3 my-4 w-max'>{showAddToCart ? "Add to Cart" : "Go To Cart"}</button>
                    <button onClick={() => HanleAddToWishList(product)} className='bg-red-500 text-white px-6 py-3 my-4 w-max'>Add to Wishlist</button>
                </div>

                <p><span className='font-semibold'>Category:</span> {product.category}</p>
                <p><span className='font-semibold'>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
