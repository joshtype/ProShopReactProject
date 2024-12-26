import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

// Footer component to be imported by App.js
const Footer = () => {

  // get current year from datetime obj
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center py-3'>
                <p>ProShop by Josh Gregory &copy; { currYear }</p>
                <hr />
                <p>
                    Josh Gregory's GitHub: &nbsp;
                    <a href="https://github.com/joshtype/ProShopReactProject" target="_blank" rel="noreferrer">
                      joshtype</a>
                </p>
                <p>
                    Source repo: &nbsp; 
                    <a href="https://github.com/bradtraversy/proshop-v2" target="_blank" rel="noreferrer">
                       proshop-v2</a>
                </p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
