import React from 'react'

function Pagination({setPageNumber, pageNumber, setPagenumber, page}) {
    const nextPageHandle = () => {
        if(pageNumber <= 72) {
              setPageNumber(pageNumber + 8)
              return setPagenumber(page + 1)
        }
        return pageNumber
    }
    const prevPageHandle = () => {
        if(pageNumber > 0) {
             setPageNumber(pageNumber - 8)
             setPagenumber(page - 1)

        }
           return pageNumber
    }
  return (
    <div className='flex justify-center pb-[40px]'>
      <div className='flex'>
        <button className='rounded-l-full w-[80px] flex justify-center align-center shadow-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={prevPageHandle}>Prev</button>
        <span className='bg-[#b9a8a8] w-[40px] justify-center flex'>{page}</span>
        <button className='rounded-r-full w-[80px] flex justify-center align-center shadow-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' onClick={nextPageHandle}>Next</button>
      </div>
    </div>
  )
}

export default Pagination
