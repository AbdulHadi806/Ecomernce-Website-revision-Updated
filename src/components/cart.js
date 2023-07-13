import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Expensetracker from './expense-tracker'
import ReusableCard from './reusable-card'
import { RemoveFromCartIDHandler } from '../redux/slice/cartslice'

export const Cart = () => {
  const cartItems = useSelector(state => state.cartSlice.CartItems);
  const dispatch = useDispatch() 
  const removeCartHandler = (item) => {
    dispatch(RemoveFromCartIDHandler(item))
  }
    return (
        <div className='  mt-[100px] flex-wrap pb-[20px]'><h2>sasdas</h2>
            <Expensetracker />
            <div className='flex justify-center gap-2 flex-wrap '>
            { cartItems.length <= 0? <div>No items in cart</div>:cartItems && cartItems.map(items => {
                return (
                    <div class="max-w-sm bg-white border w-[350px] h-[400px] border-gray-200 flex flex-col rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to="/description" className='h-[180px] pt-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'>
                            <img class="rounded-t-lg w-[100%] bg-transparent object-contain h-[100%] text-[21px]" src={items.images[0]} alt={items.title} />
                        </Link>
                        <div class="p-5 h-[220px]">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{items.title}</h5>
                            </a>
                            <span>Count: {items.count}</span>
                            <div className='flex gap-x-[5px]'>
                                <span>Price:</span>
                                <span>{items.price} USD</span>
                            </div>
                            <button onClick={e => {e.preventDefault();removeCartHandler(items)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

