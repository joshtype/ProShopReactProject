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
import products from './data/products.js';  // BE modules must use .js (not React .jsx)

dotenv.config();                        // init config obj
const port = process.env.PORT || 5000;  // use config to define ports

// init server & define API routes using var
const app = express();

// create API route via get() to URL = ".../"
app.get("/", (req, res) => { 
    // define response to get(), shown in UI
    res.send("API is running...");  // will load React UI
});

// create API route to URL = ".../api/products"
app.get("/api/products", (req, res) => {
    res.json(products);  // send JSON response to UI
});

// create API route to URL = ".../api/products/id"
app.get("/api/products/:id", (req, res) => {
    // find product._id that matches placeholder :id in URL
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);  // send JSON response to UI
});

// listen at port for data sent, define behavior 
app.listen(port, () => 
    console.log(`Server running at port ${port}.`) 
);
