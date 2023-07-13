import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import ReusableCard from './reusable-card';
import { useGetAllProductsQuery } from '../redux/apiCalls/productApi';
import { addToCartIDHandler } from '../redux/slice/cartslice';

function Products({ setParamID, paramID }) {
  const { data, isError, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCartIDHandler(item))
  };

  if (isLoading) {
    return <h2>Loading Data...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  return (
    <div className="flex justify-between flex-wrap gap-[15px] py-[30px]"> {/* Updated class to className */}

      {data.map((item) => (
        <ReusableCard
          key={item.id} // Add a unique key prop
          addToCartHandler={addToCartHandler}
          item={item}
        />
      ))}
    </div>
  );
}

export default Products;