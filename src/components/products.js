import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/action';
import { Link } from 'react-router-dom';
import ReusableCard from './reusable-card';
function Products({setParamID, paramID}) {
    const productData = useSelector(state => state.ShopItems)
    const dispatch = useDispatch()
    const productDetailsHandler = (item) => {
        setParamID(item.id)
    }
    const addToCartHandler = (item) => {
        dispatch(addToCart(item))
    }

    let productDataUpdated;
    const shortenString = (array, property) => {
        array.forEach(obj => {
          if (obj[property].length > 40) {
            obj[property] = obj[property].substring(0, 40) + '...';
          }
        });
        productDataUpdated = array
        return productDataUpdated
      }
        shortenString(productData, "title")
    return (
        <div class="flex justify-between flex-wrap gap-[15px] py-[30px]">
            {productDataUpdated.map((item) => {
                return (
                 (
                    <ReusableCard addToCartHandler={addToCartHandler} item = {item}/>
                 )
                )
            })}
        </div>
    )
}

export default Products
