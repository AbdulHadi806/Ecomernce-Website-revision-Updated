import React from 'react'
import Banner from '../components/banner'
import Products from '../components/products'
// import Pagination from '../components/pagination'

function Homepage({ setPageNumber, pageNumber, setPagenumber, page, setParamID, paramID}) {
  return (
    <div>
      <Banner />
      <Products paramID={paramID} setParamID={setParamID}/>
      {/* <Pagination pageNumber={pageNumber} setPagenumber = {setPagenumber} page = {page} setPageNumber={setPageNumber}/> */}
    </div>
  )
}

export default Homepage
