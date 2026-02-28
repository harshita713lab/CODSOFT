import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); 
  const [showCart, setShowCart] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} Added to Cart! 🛒`);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333', padding: '15px 30px', color: 'white', borderRadius: '10px' }}>
        <h1 style={{ margin: 0 }}>🛒 Harshita's E-Store</h1>
        <button 
          onClick={() => setShowCart(!showCart)}
          style={{ backgroundColor: '#ffc107', color: '#333', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}
        >
          {showCart ? "Back to Shop" : `View Cart (${cart.length})`}
        </button>
      </div>

      {showCart ? (
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <h2>Your Shopping Cart 🛍️</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty. Go buy something!</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                  <span>{item.name}</span>
                  <strong>₹{item.price}</strong>
                </div>
              ))}
              <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <h3>Total: ₹{calculateTotal()}</h3>
                <button 
                  onClick={() => {
                    alert("🎉 Payment Successful! Your order has been placed.");
                    setCart([]); 
                    setShowCart(false); 
                  }}
                  style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
                >
                  Checkout & Pay
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="🔍 Search for products (e.g., Laptop, Shoes)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '12px 20px', width: '50%', minWidth: '300px', borderRadius: '25px', border: '2px solid #ddd', fontSize: '16px', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
          
            {filteredProducts.map((product) => (
              <div key={product._id} style={{ backgroundColor: 'white', border: '1px solid #ddd', padding: '15px', borderRadius: '10px', width: '280px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
                <h3 style={{ marginBottom: '5px' }}>{product.name}</h3>
                <p style={{ color: '#666', fontSize: '14px', height: '40px' }}>{product.description}</p>
                <h2 style={{ color: '#28a745', marginTop: '10px' }}>₹{product.price}</h2>
                <button 
                  onClick={() => addToCart(product)} 
                  style={{ backgroundColor: '#007bff', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}
                >
                  Add to Cart ➕
                </button>
              </div>
            ))}
          
            {filteredProducts.length === 0 && (
              <h3 style={{ color: '#888', marginTop: '20px' }}>Oops! No products found. 😢</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;