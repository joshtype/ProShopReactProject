// using Routes with <Link to> & LinkContainer, instead of <a href>, creates a single page web app
// screens are rendered via nav routes rather than new pages being loaded, improving speed/UX/security

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/index.css';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// call method to create browser router (top-level route)
const router = createBrowserRouter(
  // pass in method to create routes from elements (components)
  createRoutesFromElements(
    // pass in html routes to App (parent) with enclosed components (children)
    // set HomeScreen index=True, path=/
    // set ProductScreen path to placeholder id
    <Route path="/" element={ <App /> }>
      <Route path="/" index={ true } element={ <HomeScreen /> } />
      <Route path="/product/:id" element={ <ProductScreen /> } />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // render router provider obj with router prop passed in
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

reportWebVitals();
