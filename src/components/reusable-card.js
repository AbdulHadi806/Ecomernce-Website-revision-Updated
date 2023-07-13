import React from 'react'
import { Link } from 'react-router-dom';

function ReusableCard({item, addToCartHandler}) {
    return (
        <div>
            <div class="max-w-sm bg-white border w-[350px] h-[400px] border-gray-200 flex flex-col rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/description/${item.id}`}  className='h-[180px] pt-4 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800'>
                    <img class="rounded-t-lg w-[100%] bg-transparent object-contain h-[100%] text-[21px]" src={item.images[0]} alt={item.title} />
                </Link>
                <div class="p-5 h-[220px]">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                    </a>
                    <div className='flex gap-x-[5px]'>
                        <span>Price:</span>
                        <span>{item.price} USD</span>
                    </div>
                    <button onClick={e => {e.preventDefault();addToCartHandler(item)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReusableCard
