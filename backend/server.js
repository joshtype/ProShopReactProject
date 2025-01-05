/*
 * Uses ES JS via type in package.json.
 * Creates server via Express at port 5000 & API.
 * Runs "start" script in package.json at "npm start".
 * Defines API routes to products in DB via URLs.
 * FE/BE servers run without restarts & concurrently
 * via nodemon & concurrently dev deps.
*/
import express from 'express';              // to init BE server
import dotenv from 'dotenv';                // to config node env & port
dotenv.config();                            // init config obj
import connectDB from './config/db.js';     // to connect to MongoDB
import products from './data/products.js';  // must use .js (not React jsx) in backend files

// init port from .env to var
const port = process.env.PORT || 5000;  // 8k or 5k

// init MongoDB connection from /config/db.js
connectDB();  // calls async method & tries to connect

// init server to var & define API routes using var
const app = express();

// API route to URL = ".../"
app.get("/", (req, res) => { 
    // define response to get() to show in UI
    res.send("API is running...");  // will load React UI
});

// API route to URL = ".../api/products"
app.get("/api/products", (req, res) => {
    res.json(products);  // send JSON response to UI
});

// API route to URL = ".../api/products/id"
app.get("/api/products/:id", (req, res) => {
    // find product._id that matches placeholder :id in URL
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);  // send JSON response to UI
});

app.listen(port, () => 
    console.log(`Server running at port ${port}.`) 
);
