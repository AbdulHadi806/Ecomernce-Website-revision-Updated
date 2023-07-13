import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetAllProductsQuery } from '../redux/apiCalls/productApi'
function Header() {
    const cartItems = useSelector(state => state.cartSlice.CartItems);
    const [categories, setCategories] = useState([])
    const { data, isError, isLoading } = useGetAllProductsQuery();
    const findCategories = (data) => {
      const allCategories = data && data.map(item => {
        return {categories: item.category.id, name: item.category.name}
      })
      const uniqCategories = allCategories && allCategories.filter((v,i,a)=>a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i)
      setCategories(uniqCategories)
    }
    useEffect(()=> {
      findCategories(data)
    },[data])
  return (
    <div className='flex justify-between align-center py-[20px] md:py-[30px] fixed right-0 top-0 left-0 bg-white px-[30px]'>
      <Link to="/" href='#' className='text-[16px] text-dark md:text-[20px]'>
        ByGoods
      </Link>
      <nav>
        <ul className='flex justify-center align-center lg:gap-x-[40px]'>
            {categories && categories.map((items)=> {
                return (
                    <li><Link to={`/categories/${items.categories}`}>{items.name}</Link></li>
                )
            })}
        </ul>
      </nav>
      <div className="cart-btn">
        <Link to="/cart"><FontAwesomeIcon className='text-[24px]' icon={faCartShopping} /><span className='text-[red] fw-[700'>{cartItems.length}</span></Link>
      </div>
    </div>
  )
}

export default Header
