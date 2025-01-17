// Product component for HomeScreen.jsx.

import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // replace <a> with <Link> & 'to' prop
import Rating from './Rating';

// Rating props: ratingVal = product.rating, ratingNum = product.numRatings
// Values for both must be passed in whenever using the Rating component
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={ `/product/${product._id}` }>
        <Card.Img src={ product.image } variant="top" />
      </Link>

      <Card.Body>
        <Link to={ `/product/${product._id}` }>
            <Card.Title as="div" className="product-title">
                <strong>{ product.name }</strong>
            </Card.Title>
        </Link>

        <Card.Text>
          <Rating  
            ratingVal={ product.rating }
            ratingNum={ ` ${product.numRatings} ratings` } 
          />
        </Card.Text>

        <Card.Text as="h3">
            ${ product.price }
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
