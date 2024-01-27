import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import "./compt1.css"

const Footer = () => {
  return (
    <div className='ftr'>
      <Navbar className='ftr' fixed="bottom" bg="secondary" variant="dark">
        <Container className='ftr' >
          <Navbar.Brand >&copy; Footer</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Footer;
