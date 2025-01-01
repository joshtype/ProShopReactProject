/*
 * Creates a frontend server at port 3000 using "start" script in package.json (via "npm start").
 * index.js imports App.js that contains component screens that need to be rendered.
 * Screens are rendered via routes, rather than new pages, to improve speed/UX/security.
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/index.css';

// call method to create browser router (top-level route)
const router = createBrowserRouter(
  // pass in method to create routes from elements (components)
  createRoutesFromElements(
    // pass in html routes to App (parent) with enclosed components (children)
      // set HomeScreen index=True, path=/
      // set ProductScreen path using placeholder :id
    <Route path="/" element={ <App /> }>
      <Route path="/" index={ true } element={ <HomeScreen /> } />
      <Route path="/product/:id" element={ <ProductScreen /> } />
    </Route>
  )
)

// init root const, set to createRoot React method with DOM id search
const root = ReactDOM.createRoot(document.getElementById('root'));  // search for id 'root'
root.render(
  // render router with router prop passed in to allow routing between screens
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

reportWebVitals();
