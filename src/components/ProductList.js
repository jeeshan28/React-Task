// components/ProductList.js
import React, { useState } from 'react';

function ProductList({ products }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{position:"absolute", top:"0%" , left:"30%" , height:"638px", width:"70%" }}>
      <h3 style={{fontSize:"30px" , fontWeight:"500"}}>Product List</h3>
      <input
      style={{height:"6vh" , width:"18vw" , border:"1px solid black" ,  boxShadow:"0px 4px 5px black" , outline:"none" , paddingLeft:"2%" , borderRadius:"5px"}}
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredProducts.length === 0 ? (
        <p>No Product Found...</p>
      ) : (
        <ul style={{ display:"flex" , flexDirection:"column" , gap:"10px"}}>
          {filteredProducts.map((product, index) => (
            <li  style={{ marginTop:"2%", backgroundImage: "linear-gradient(to right,#06D4DF, #6782EB , #D026F9)" , width:"20vw" ,  height:"8vh", display:"flex" , justifyContent:"center" , alignItems:"center" , fontSize:"25px" , color:"white"}} key={index}>{product.name} - {product.price} ₹</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
