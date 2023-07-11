import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchApi} from "./redux/action"
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productitem from './components/product-item';
import Homepage from './pages/homepage';
import Cart from './components/cart';
import CategoryPages from './components/categoryPages';
function App() {
  const [limit, setLimit] = useState(12)
  const [page, setPagenumber] = useState(1)
  const [pageNumber, setPageNumber] = useState(0) 
  const [paramID, setParamID] = useState(0)
  const [paramNum, setParamNumber] = useState(0)
  const productData = useSelector(state => state.ShopItems)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchApi())
    console.log(productData)
  }, [])
  return (
    <Router>
      <div className="App">
      <div className='container md:px-[30px] mx-auto'>
        <Header />
        <Routes>
          <Route path="/" element={ <Homepage setPageNumber={setPageNumber}  paramID={paramID} setParamID={setParamID} page={page} setPagenumber = {setPagenumber} pageNumber={pageNumber} />}></Route>
            {/* <Route element={ <Protectedroute />}> */}
              <Route path={`/description/:id`} element={ <Productitem paramNum = {paramNum} setParamNumber={setParamNumber} paramID ={paramID}  />} />
          {/* </Route> */}
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/categories/:categoryId" element={<CategoryPages />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
