import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";

function Protectedroute() {
    const productItem =  useSelector(state => state.ProductDetails)
    const navigate = useNavigate()
    const productItemLength = productItem.length <= 0
    useEffect(()=> {
        if(productItemLength) {
            return navigate('/', { replace: true })
        }
    }, [])
        return (
            <Outlet />
        )
}

export default Protectedroute