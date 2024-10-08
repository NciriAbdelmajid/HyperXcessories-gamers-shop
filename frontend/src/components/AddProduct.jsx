import React, { useState } from "react";
import '../AddProd.css';
import { useNavigate } from "react-router-dom";

export default function AddProduct({ handlePost, categories }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [CategoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const newProduct = {
      name,
      imageUrl,
      price,
      quantity,
      CategoryId,
      UserId: 1,
    };

    handlePost(newProduct);

    setName('');
    setImageUrl('');
    setPrice('');
    setQuantity('');
    setCategoryId('');
    navigate("/home");
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
        />
        <div>
          <label>Category:</label>
          <select
            value={CategoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
