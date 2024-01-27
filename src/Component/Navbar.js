import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

function NavbarComp() {
  return (
    <div>  
     <Navbar fixed="top" bg="dark" variant="dark">
    <Container >
      <Navbar.Brand>Header</Navbar.Brand>
      <div className='mr-10'>
        <NavLink className={"ancr"} to="/" >Home</NavLink>
        <NavLink className={"ancr"} to="/component2">SecondComponent</NavLink>
        <NavLink className={"ancr"} to="/component3" > ThirdComponent </NavLink>
      </div>
    </Container>
  </Navbar>
  </div>
  )
}


export default NavbarComp