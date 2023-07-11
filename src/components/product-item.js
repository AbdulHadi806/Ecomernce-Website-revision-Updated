import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchApiByID } from '../redux/action'
import { useParams } from 'react-router-dom';
function Productitem() {
    const productData = useSelector(state => state.ProductDetails)
    const dispatch = useDispatch()
    const addToCartHandler = (item) => {
        dispatch(addToCart(item))
    }
    const { id } = useParams();

    useEffect(()=> {
        const liId = Number(id)
        dispatch(fetchApiByID(liId))
    }, [id])
    return (
        <div className='flex justify-center mt-[100px]'>
                    <div class="max-w-sm bg-white border border-gray-200 flex flex-col rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='d-flex gap-[15px]'>
                        <div>
                        </div>
                        <div>
                            <div class="p-5 ">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{productData.title}</h5>
                                </a>
                                <div className='flex gap-x-[5px]'>
                                    <span>Price:</span>
                                    <span>{productData.price} USD</span>
                                </div>
                                <button onClick={e => {e.preventDefault();addToCartHandler(productData)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
