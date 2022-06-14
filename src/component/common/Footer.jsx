import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../../asset/css/common/common.css'

const Footer = () => {
  return (
    <>
      <Navbar fixed='bottom' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Footer