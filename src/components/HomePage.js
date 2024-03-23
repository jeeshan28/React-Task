// components/HomePage.js
import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import ProductList from './ProductList';

function HomePage({ setIsLoggedIn }) {
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div style={{height:"641px", width:"100%" , backgroundColor:"white"}}>
        {/* <nav style={{height:"15%", width:"20%" , backgroundColor:"red"}}> */}

      {/* <h2 color='Red'>Home Page</h2> */}
      <button style={{height:"7%" , width:"10vw"  , backgroundImage: "linear-gradient(to right,#06D4DF, #6782EB , #D026F9)", color:"white", fontSize:"20px" , margin:"2%" , borderRadius:"6px"}} onClick={handleLogout}>Logout</button>
        {/* </nav> */}
      <AddProductForm products={products} setProducts={setProducts} />
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
