import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
    const cartItems = useSelector(state => state.CartPage)
    const navigationPages = [{id: 1 ,name: "Shoes"}, {id: 2, name: "Electronics"}, {id: 3, name: "Furniture"}, {id: 4, name: "Others"}]
  return (
    <div className='flex justify-between align-center py-[20px] md:py-[30px] fixed right-0 top-0 left-0 bg-white px-[30px]'>
      <Link to="/" href='#' className='text-[16px] text-dark md:text-[20px]'>
        ByGoods
      </Link>
      <nav>
        <ul className='flex justify-center align-center lg:gap-x-[40px]'>
            {navigationPages.map((items)=> {
                return (
                    <li><Link to={`/categories/${items.id}`}>{items.name}</Link></li>
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
