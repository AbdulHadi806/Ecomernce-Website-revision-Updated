import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addToCart, fetchCategories } from '../redux/action'
import ReusableCard from './reusable-card'

function CategoryPages() {
    const productData = useSelector(state => state.CategoriesPage)
    const { categoryId } = useParams()
    const dispatch = useDispatch()
    const addToCartHandler = (item) => {
        dispatch(addToCart(item))
    }
    useEffect(() => {
        dispatch(fetchCategories(categoryId))
        console.log(productData, "productCategorydata at categorypage")
    }, [categoryId])
    return (
        <div className='mt-[100px] flex gap-2 flex-wrap'>
            {productData.map(item => {
                return (
                    <ReusableCard addToCartHandler={addToCartHandler} item = {item}/>
                )
            })}
        </div>
    )
}

export default CategoryPages
