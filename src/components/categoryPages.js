import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReusableCard from './reusable-card'
import { useGetProductByCategoryQuery } from '../redux/apiCalls/productApi'
import { addToCartIDHandler } from '../redux/slice/cartslice'
import { useDispatch } from 'react-redux'

function CategoryPages() {
    const { categoryId } = useParams()
    const {data, isLoading} = useGetProductByCategoryQuery(categoryId)
    const dispatch = useDispatch()
    const addToCartHandler = (item) => {
        dispatch(addToCartIDHandler(item))
      };
      if(isLoading){
        return <h2 className='mt-[150px]'>Data is Loading</h2>
      }
    return (
        
        <div className='mt-[100px] flex gap-2 flex-wrap'>
            {data && data.map(item => {
                return (
                    <ReusableCard addToCartHandler={addToCartHandler} item = {item}/>
                )
            })}
        </div>
    )
}

export default CategoryPages
