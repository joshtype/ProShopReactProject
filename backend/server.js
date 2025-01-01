/*
 * Uses ES JS via type=module in package.json.
 * Creates server via Express at port 5000 & API.
 * Runs "start" script in package.json at "npm start".
*/

import express from 'express';

const port = 5000;      // backend server port
const app = express();  // init Express js obj

// create API by calling get() on Express obj
// pass in HomeScreen path, request & response
app.get("/", (req, res) => { 
    // define data sent to UI via send() on Express obj 
    res.send("API is running...");  // will load React UI
});

// listen at port for data sent, define receipt behavior 
app.listen(port, () => 
    console.log(`Server running at port ${port}.`) 
);
