import React from 'react'

const DescriptionBox = ({ product }) => {
    // This is the description I am showing in my carts
    return (
        <div className='px-6 md:px-0'>
            <div className='flex'>
                <div className='border border-gray-400 font-semibold p-4'>Description</div>
                <div className='border border-gray-400 font-semibold p-4'>Reviews {product.rating.count}</div>
                <div className='border border-gray-400 font-semibold p-4'>Delivered</div>
                <div className='border border-gray-400 font-semibold p-4'>Payment Options</div>
                <div className='border border-gray-400 font-semibold p-4'>Offers</div>
            </div>
            <div className='border border-gray-400 p-8'>
                <p>
                    Crafted with meticulous attention to detail, this product is designed to offer a seamless balance of quality, functionality, and durability. Whether you're using it for personal, professional, or everyday tasks, it adapts effortlessly to your needs, making life easier and more enjoyable. Its thoughtful design ensures a user-friendly experience while maintaining the highest standards of reliability. Perfect for anyone seeking a dependable solution, this product is built to enhance your daily routine and deliver lasting value you can trust.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
