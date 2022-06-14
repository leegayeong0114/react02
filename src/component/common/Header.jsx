import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import '../../asset/css/common/common.css'

const Header = () => {

  const [isDark, setIsDark] = useState(true)

  const navigate = useNavigate()

  const handleNavClick = (target) => navigate(target) 

  const toggleDarkMode = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      <Navbar bg={isDark ? 'dark' : 'light'} variant={isDark ? 'dark' : 'light'} style={{margin: 'auto auto 20px auto'}}>
        <Container>
          <Navbar.Brand onClick={() => handleNavClick('/')}>M</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => handleNavClick('/')}>Main</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/pm')}>PlusMinus</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/lm')}>LandMine</Nav.Link>
            <Nav.Link onClick={() => handleNavClick('/ax')}>Axios</Nav.Link>
            <Nav.Link>[{isDark ? `DarkMode` : `LightMode`}]</Nav.Link>
            <Form.Check className='ms-auto' type='switch' onChange={toggleDarkMode} checked={isDark}></Form.Check>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header