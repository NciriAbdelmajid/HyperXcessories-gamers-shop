import React, { useState } from "react";
import ProductDetails from "./ProductDetails.jsx";
import '../Home.css';
// import AllProducts from "./AllProducts.jsx";

export default function Home({ data }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>
            <div className="topnav">    
                <a className="active" href="#home">Home</a>
                <div className="dropdown">
                    <a href="#categories" onClick={handleDropdown}>
                        Categories
                    </a>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <a href="#category1">keyboard</a>
                            <a href="#category2">mouses</a>
                            <a href="#category3">Pc</a>
                            <a href="#category4">Headphones</a>
                        </div>
                    )}
                </div>
                <a href="#about">About</a>
                <a className="active" href="/add">+</a>
            </div>
               
           
           
            <div className="container_cards">
                {data.map((elem) => {
                    return <ProductDetails key={elem.id} elem={elem} />;
                })}
            </div>
           
        </div>
    );
}
