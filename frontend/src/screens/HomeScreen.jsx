/* 
 * HomeScreen contains components to be rendered via React Router.
 * Acts as index.html & loads Product component for each product in DB.
 * Product component includes Rating component.
*/
import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);
  

  // 'products' now refers to a piece of state
  return (
    <>
        <h1>Latest Products</h1>

        <Row>
            { products.map( (product) => (
                <Col key={ product._id } sm={12} md={6} lg={4} xl={3}>
                    <Product product={ product } />
                </Col>
            )) };
        </Row>
    </>   
  )
}

export default HomeScreen
