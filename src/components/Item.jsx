import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../Utils/cartSlice';
import { addToWishList } from '../Utils/wishlistSlice';

const Item = ({ product }) => {
    const dispatch = useDispatch();
    const userData = useSelector(store => store.userSlice.user);
    const navigate = useNavigate();

    // tolerant selectors: try several common slice shapes
    const cartItems = useSelector(store =>
        store.cart?.items ??
        store.cart?.cartItems ??
        store.cartSlice?.items ??
        store.cartSlice?.cartItems ??
        []
    );

    const wishItems = useSelector(store =>
        store.wishlist?.items ??
        store.wishlist?.wishList ??
        store.wishlistSlice?.items ??
        store.wishList?.items ??
        []
    );

    const isSame = (a, b) => {
        if (a == null || b == null) return false;
        // compare by id (string-safe)
        return String(a) === String(b);
    };

    const inCart = Array.isArray(cartItems) && cartItems.some(i => isSame(i?.id ?? i?.productId ?? i?.product?.id, product?.id));
    const inWishlist = Array.isArray(wishItems) && wishItems.some(i => isSame(i?.id ?? i?.productId ?? i?.product?.id, product?.id));

    const handleAddToCart = (item) => {
        if (inCart) return; // already added
        if (userData) {
            dispatch(addItemToCart(item));
        } else {
            navigate('/login');
        }
    };

    const handleAddToWishlist = (item) => {
        if (inWishlist) return; // already added
        if (userData) {
            dispatch(addToWishList(item));
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="group relative border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 p-4 bg-white">
            <Link to={`/products/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
                {/* Image Container - Ensures Full Image is Visible */}
                <div className="w-full h-48 flex justify-center items-center">
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            </Link>

            {/* Product Info */}
            <div className="  justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-700">
                    <Link to={`/products/${product.id}`} className="hover:underline">
                        {product?.title.split("-")[0]}
                    </Link>
                </h3>
                <p className="text-sm font-bold text-gray-900">Price: ${product?.price}</p>
            </div>

            {/* Rating */}
            <p className="text-gray-700 mt-1">Rating: 
                <span className="bg-green-500 text-white px-2 py-0.5 rounded-lg ml-1">{product.rating}</span>
            </p>

            {/* Action Buttons */}
            <div className="flex  flex-row text-xs  justify-center gap-4 mt-4">
                {/* Add to Wishlist Button */}
                <button
                    onClick={() => handleAddToWishlist(product)}
                    disabled={inWishlist}
                    aria-disabled={inWishlist}
                    className={`py-2 px-3 rounded-lg flex items-center gap-1 transition duration-200 ${
                        inWishlist ? 'bg-green-600 text-white cursor-default' : 'bg-yellow-500 text-white hover:bg-yellow-700'
                    }`}
                >
                    {inWishlist ? 'Added to' : 'Add to'} <FaHeart className="text-sm" />
                </button>

                {/* Add to Cart Button */}
                <button
                    onClick={() => handleAddToCart(product)}
                    disabled={inCart}
                    aria-disabled={inCart}
                    className={`py-2 px-3 rounded-lg flex items-center gap-1 transition duration-200 ${
                        inCart ? 'bg-green-600 text-white cursor-default' : 'bg-blue-500 text-white hover:bg-blue-700'
                    }`}
                >
                    {inCart ? 'Added to' : 'Add to'} <FaCartShopping className="text-sm" />
                </button>

            </div>
        </div>
    );
};

export default Item;