// components/AddProductForm.js
import React, { useState } from 'react';

function AddProductForm({ products, setProducts }) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price) {
      setError('Please enter both product name and price');
      return;
    }
    if (products.some(product => product.name.toLowerCase() === productName.toLowerCase())) {
      setError('Product already exists');
      return;
    }
    setProducts([...products, { name: productName, price }]);
    setProductName('');
    setPrice('');
    setError('');
  };

  return (
    <div>
      <h3 style={{paddingLeft:"2%", fontSize:"30px" , fontWeight:"900" , fontFamily:"monospace", letterSpacing:"1px"}}>Add Product</h3>
      <form style={{height:"300px", width:"300px" , boxShadow:"0px 8px 10px black" , border:"1px solid black" , borderRadius:"10px", display:"flex" , flexDirection:"column", gap:"30px", paddingTop:"2%" , marginLeft:"2%" , paddingLeft:"2%"
}} onSubmit={handleSubmit}>
        <div>
          <label style={{fontSize:"20px" }}>Product Name</label> <br/>
          <input placeholder="Enter Product"  style={{height:"35px", width:"18vw" ,borderRadius:"5px", border:"1px solid black" , paddingLeft:"2%"}} type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>
        <div>
          <label style={{fontSize:"20px" }}>Price</label><br/>
          <input placeholder="Enter Price" style={{height:"35px", width:"18vw" , borderRadius:"5px", border:"1px solid black" , paddingLeft:"2%"}} type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button style={{height:"5vh", width:"18vw" , borderRadius:"5px" , backgroundImage: "linear-gradient(to right,#06D4DF, #6782EB , #D026F9)", color:"white", fontSize:"20px"}} type="submit">Add</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default AddProductForm;
