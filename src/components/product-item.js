import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useGetProductByIDQuery } from '../redux/apiCalls/productApi';
import { addToCartIDHandler } from '../redux/slice/cartslice';
function Productitem() {
    const { id } = useParams();
    const {data, isLoading} = useGetProductByIDQuery(id)
    const dispatch = useDispatch()
    const addToCartHandler = (item) => {
        dispatch(addToCartIDHandler(item))
      };
    if(isLoading) {
        return <h2 className='flex justify-center mt-[150px]'>Loading Data</h2>
    }
    return (
        <div className='flex justify-center mt-[100px]'>
                    <div class="max-w-sm bg-white border border-gray-200 flex flex-col rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='d-flex gap-[15px]'>
                        <div>
                            <img src={data && data.images[0]} alt={data && data.title} />
                        </div>
                        <div>
                            <div class="p-5 ">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data && data.title}</h5>
                                </a>
                                <div className='flex gap-x-[5px]'>
                                    <span>Price:</span>
                                    <span>{data && data.price} USD</span>
                                </div>
                                <button onClick={e => {e.preventDefault();addToCartHandler(data)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Productitem
