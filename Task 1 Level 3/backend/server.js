const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Product = require('./models/Product');

const app = express(); 

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully! 🟢"))
    .catch((err) => console.log("MongoDB Connection Failed! 🔴", err));

app.get('/api/seed', async (req, res) => {
    try {
        await Product.deleteMany({}); 
        
        const dummyProducts = [
    
            { name: "Gaming Laptop", description: "Super fast laptop for coding and gaming", price: 55000, imageUrl: "https://images.unsplash.com/photo-1603302576837-37561b2e2302", category: "Electronics" },
            { name: "Wireless Headphones", description: "Noise cancelling headphones", price: 2500, imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e", category: "Accessories" },
            { name: "Smart Watch", description: "Fitness tracker with heart rate monitor", price: 3000, imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12", category: "Electronics" },
            { name: "Cotton T-Shirt", description: "Comfortable daily wear t-shirt", price: 500, imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab", category: "Clothing" },
        
            { name: "Running Sneakers", description: "Lightweight and comfortable running shoes", price: 2200, imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", category: "Footwear" },
            { name: "Stylish Sunglasses", description: "UV protection vintage sunglasses", price: 800, imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083", category: "Accessories" },
            { name: "Travel Backpack", description: "Spacious waterproof bag for travel", price: 1500, imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62", category: "Bags" },
            { name: "Mechanical Keyboard", description: "RGB mechanical keyboard for fast typing", price: 3500, imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212", category: "Electronics" }
        ];

        await Product.insertMany(dummyProducts);
        res.send("Lots of New Products successfully added to the store! 🎉");
    } catch (error) {
        console.log(error);
        res.status(500).send("Product daalne mein error aaya");
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find(); 
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
});