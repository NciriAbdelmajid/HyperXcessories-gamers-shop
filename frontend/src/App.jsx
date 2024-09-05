import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import AddProduct from './components/AddProduct.jsx';
// import AllProducts from './components/AllProducts.jsx';
import Home from './components/Home.jsx';
import axios from 'axios'
function App() {
 const[data,setData]=useState([])

 useEffect(()=>fetchProd(),[])
const fetch=()=>{
  axios.get(`http://localhost:3000/api/users/getAll`).then((res)=>{
    setData(res.data)
    console.log("Fetched data:", res.data)
    
  }).catch((error)=>console.log(error)
  )
}
const fetchProd=()=>{
  axios.get(`http://localhost:3000/api/product/getAll`).then((res)=>{
    setData(res.data)
    console.log("Fetched data:", res.data)
    
  }).catch((error)=>console.log(error)
  )
}




  return (
    <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home data={data} />}>
    </Route>
    <Route path="/add" element={<AddProduct  />}>
    </Route>
      <Route path="/login" element={<Login />}>
      </Route>
      <Route path="/register" element={<Register />}></Route>
      {/* <Route path="/allProducts" element={<AllProducts  data={data}/>}></Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
