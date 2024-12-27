import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';

// using Routes with <Link to> & LinkContainer, instead of <a href>, creates a single page web app
// screens are rendered via nav routes rather than new pages being loaded, improving speed/UX/security

// call method to create browser router (top-level route)
const router = createBrowserRouter(
  // pass in method to create routes from elements (components)
  createRoutesFromElements(
    // pass in html routes to App (parent) and component (children)
    <Route path="/" element={ <App /> }>
      <Route path="/" index={ true } element={ <HomeScreen /> } />
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
