import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } 
from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {

  const { id: productId } = useParams();  // destructure using hook, store id as productId
  const product = products.find((p) => p._id === productId);  // fetch product data by searching arr for id
  console.log(product);  // log product details

  return (
    // use Link to route to HomeScreen (path="/" for index)
    // product details = 1 row with 3 cols: 
        // col 1 = 5/12 cols for md or smaller scrn 
        // col 2 = 4/12 cols for md or smaller scrn                
        // col 3 = 3/12 cols for md or smaller scrn
    <>
      <Link className="btn btn-light my-3" to="/">
        Home
      </Link>

      <Row className="product-details">
        <Col md={5}>
          <Image src={ product.image } alt={ product.name } fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
                <h3>{ product.name }</h3>
            </ListGroup.Item>

            <ListGroup.Item>
                <Rating 
                    ratingVal={ product.rating }
                    ratingNum={ ` ${product.numRatings} ratings` } 
                />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${ product.price }            
            </ListGroup.Item>

            <ListGroup.Item>
                { product.description }   
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>              
                  <Col>
                    Quantity:
                  </Col>

                  <Col>
                    { product.countInStock > 0 ? <>{product.countInStock} left</> : "Sold out" }
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <center>
                  <Button 
                    className="btn-block" 
                    type="button"
                    disabled={ product.countInStock === 0 }
                  >
                    Add to Cart
                  </Button>
                </center>
              </ListGroup.Item>
                
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
