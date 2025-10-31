import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import EmptyCart from '../assets/EmptyCart.png'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, updateItemQuantity } from '../Utils/cartSlice'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Cart = () => {

  // Get cart items from Redux store
  const cartItems = useSelector((store) => store.cartSlice.items);
  // console.log(cartItems)

  const dispatch = useDispatch();

  // Handle removing item from cart
  const handleRemovefromCart = (itemId) => {
    // console.log("handle remove func ecexute");
    dispatch(removeFromCart(itemId))
  }

  const [discountCode, setDiscountCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Calculate total price of items in cart
  const calculateTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total;
  };

  // Calculate final total after applying discount
  const calculateTotalFinal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return ( (total - (total * discount) / 100) ).toFixed(2);

  };

  // Handle applying discount code
  const handleApplyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscount(10);
    } else if (discountCode === "SAVE20") {
      setDiscount(20);
    } else if (discountCode === "SAVE30") {
      setDiscount(30);
    } else {
      setDiscount(0);
      alert("Invalid Discount Code");
    }
  };

  // Handle incrementing item quantity
  const handleIncrement = (id) => {
    dispatch(updateItemQuantity({ id, quantity: 1 }));
  };

  // Handle decrementing item quantity
  const handleDecrement = (id) => {
    dispatch(updateItemQuantity({ id, quantity: -1 }));
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='mt-32'>
      <div className='max-w-7xl mx-auto my-10 p-4'>
        {cartItems.length === 0 ? (
          <div className='flex items-center justify-center'>
            <img src={EmptyCart} alt="" />
          </div>
        ) : (
          <div>
            {/* Cart Header */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4'>
              <p>Products</p>
              <p>Title</p>
              <p className='hidden md:block'>Price</p>
              <p className='hidden md:block'>Quantity</p>
              <p className='hidden md:block'>Total</p>
              <p className='hidden md:block'>Remove</p>
            </div>
            <hr className='bg-gray-300 border-0 h-[2px] my-2' />
            {/* Cart Items */}
            {cartItems.map((e) => {
              return (
                <div key={e.id}>
                  <div className='text-gray-500 font-semibold text-sm sm:text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 gap-2'>
                    <img src={e.thumbnail} className='h-16 w-16 object-cover' alt="product" />
                    <p>{e.title}</p>
                    <p className='hidden md:block'>${e.price}</p>
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 bg-gray-200 rounded-full"
                        onClick={() => handleDecrement(e.id)}
                        disabled={e.quantity <= 1}
                      >
                        <FaMinus />
                      </button>
                      <span>{e.quantity}</span>
                      <button
                        className="p-2 bg-gray-200 rounded-full"
                        onClick={() => handleIncrement(e.id)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <p className='hidden md:block'>${e.price * e.quantity}</p>
                    <X onClick={() => { handleRemovefromCart(e.id) }} className='cursor-pointer' />
                  </div>
                  <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                </div>
              );
            })}
            {/* Cart Totals */}
            <div className='flex flex-col lg:flex-row my-12 gap-10 md:gap-32'>
              <div className='flex-1 flex flex-col gap-4'>
                <h1 className='text-lg font-bold'>Cart Totals</h1>
                <div>
                  <div className='flex justify-between py-2'>
                    <p>Subtotal</p>
                    <p>${calculateTotal()}</p>
                  </div>
                  <hr className='bg-gray-300 border-0 h-[2px] mt-2' />
                  <div className='flex justify-between py-2'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  {discount > 0 && (
                    <div className='flex justify-between py-2'>
                      <p>Discount Applied: </p>
                      <p className='text-green-500'>{discount}%</p>
                    </div>
                  )}
                  <hr className='bg-gray-300 border-0 h-[2px] my-2' />
                  <div className='flex justify-between text-xl font-semibold py-2'>
                    <h3>Total</h3>
                    <h3 className='text-red-600'>${calculateTotalFinal()}</h3>
                  </div>
                </div>
                <Link to='/login'>
                  <button className='w-full lg:w-64 h-14 bg-red-500 text-white font-semibold text-lg'>PROCEED TO CHECKOUT</button>
                </Link>
              </div>
              <div className='flex-1 w-full text-lg font-semibold'>
                <p className='text-gray-600'>If you have a promo code, enter it here:</p>
                <div className='w-full lg:w-80 mt-2 flex'>
                  <input type="text" placeholder='Promo Code'
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className='flex-1 h-14 p-2 bg-gray-200' />
                  <button onClick={handleApplyDiscount} className='h-14 w-32 bg-black text-white'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
