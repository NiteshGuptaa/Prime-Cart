import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/ShopContext'
// import EmptyCart from '../assets/EmptyCart.png'

import { useDispatch, useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { addItemToCart } from '../Utils/cartSlice';
// import { removeFromWishlist } from '../Utils/wishlistSlice';

const Wishlist = () => {
  // Get wishlist items from Redux store
  const wishlistItems = useSelector((store) => store.wishlistSlice.items);

  const dispatch = useDispatch();

  // Handle adding item to cart
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item))
  }

  // Handle removing item from wishlist
  const handleRemovefromWishlist = (cartId) => {
    dispatch(removeFromWishlist(cartId))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mt-32'>
      <div className='max-w-7xl mx-auto my-10 p-4'>
        {wishlistItems.length === 0 ? (
          <div className='flex items-center justify-center'>
            <p className='text-4xl font-bold text-red-600 text-center '>Your Wishlist is Empty</p>
          </div>
        ) : (
          <div>
            {/* Wishlist Header */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4'>
              <p>Products</p>
              <p>Title</p>
              <p className='hidden md:block'>Price</p>
              <p className='hidden md:block'>Total</p>
              <p className='hidden md:block'>Remove From wishlist</p>
              <p className='hidden md:block'>Add to cart</p>
            </div>
            <hr className='bg-gray-300 border-0 h-[2px] my-2' />
            {/* Wishlist Items */}
            {wishlistItems.map((e) => {
              return (
                <div key={e.id}>
                  <div className='text-gray-500 font-semibold text-sm sm:text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 gap-2'>
                    <img src={e.image} className='h-16 w-16 object-cover' alt="product" />
                    <p>{e.title}</p>
                    <p className='hidden md:block'>${e.price}</p>
                    <p className='hidden md:block'>${e.price * e.quantity}</p>
                    <button onClick={() => { handleRemovefromWishlist(e.id) }}><MdDeleteForever className='cursor-pointer p-auto text-3xl bg-red-700 text-white' /></button>
                    <button onClick={() => { handleAddToCart(e) }} className='cursor-pointer p-auto bg-green-700 text-white'>Add to Cart</button>
                  </div>
                  <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default Wishlist;
