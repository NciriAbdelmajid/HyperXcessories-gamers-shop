import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AddProduct from './components/AddProduct.jsx';
import Home from './components/Home.jsx';
import UpdateProduct from './components/UpdateProduct.jsx';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProd();
    fetchCategories();
  }, []);

  const fetchProd = () => {
    axios.get(`http://localhost:3000/api/product/getAll`)
      .then((res) => {
        setData(res.data);
        console.log("Fetched data:", res.data);
      })
      .catch((error) => console.log(error));
  };

  const handlePost = (body) => {
    axios.post(`http://localhost:3000/api/product/add`, body)
      .then((data) => {
        console.log(data);
        fetchProd();
      })
      .catch(error => console.log(error));
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/category/getAll");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const deletePost=(id)=>{
    axios.delete(`http://localhost:3000/api/product/delete/${id}`)
    .then((res)=>{
        console.log(res)
        fetchProd()
    })
    .catch((error)=>{console.log(error)
    })
}

const handleUpdate=(id,body)=>{
  axios.put(`http://localhost:3000/api/product/update/${id}`,body)
  .then((res)=>{
    console.log(res);
    fetchProd()
  })
  .catch((error)=>{
    console.log(error);
    
  })
}

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home data={data} deletePost={deletePost}  />} />
        <Route path="/add" element={<AddProduct handlePost={handlePost} categories={categories} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update" element={<UpdateProduct categories={categories} handleUpdate={handleUpdate} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
