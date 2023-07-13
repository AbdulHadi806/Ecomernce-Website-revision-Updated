import React from 'react'
import { useSelector } from 'react-redux'

function Expensetracker() {
    const CartItems = useSelector(state => state.cartSlice.CartItems); 
    const totalPriceCounter = CartItems.reduce(
      (aucc, curr) => aucc + curr.price * curr.count,
      0
    );
  return (
    <div className='mx-auto flex align-center shadow-lg shadow-[rgba(0, 0, 0, 0.2)] p-[15px] mb-[20px] h-[100px] border-2 border-[#807373] rounded w-[280px] bg-white'>
      <span><span className='font-semibold'>Total Price:</span> {totalPriceCounter} USD</span>
    </div>
  )
}

export default Expensetracker
