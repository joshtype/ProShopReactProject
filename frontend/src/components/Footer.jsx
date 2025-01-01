// Footer component for each screen rendered via React Router.

import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import githubIcon from '../assets/githubIcon.svg';

const Footer = () => {
  const currYear = new Date().getFullYear();  // curr year

  return (
    <footer>
      <Container>
        <Row>
            <Col className='text-center py-3'>
              <hr />
                <p>
                  Built using MERN stack by Josh Gregory. joshtype: &nbsp;
                  <Link to="https://github.com/joshtype/ProShopReactProject" target="_blank" rel="noreferrer">
                    <img src={ githubIcon } alt="GitHub icon" /></Link>.
                </p>

                <p>
                  Based on &nbsp;
                  <Link to="https://github.com/bradtraversy/proshop-v2" target="_blank" rel="noreferrer">
                    Brad Traversy</Link>.
                </p>

                <p>&copy; { currYear }</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
