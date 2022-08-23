import React from 'react';
import {Container,Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
function Navigasi(){

    return(
      <Navbar  expand="lg" className="navbar">
      <Container fluid  className="navbar-color">
        <Navbar.Brand href="#home" className="navbar-malik mx-sm-4">Jakarta Legalisir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav ">
          <Nav>
            <Nav.Link className="navbar-font m-2" href="#home">Beranda</Nav.Link>
            <Nav.Link className="navbar-font m-2" href="#link">Layanan</Nav.Link>
            <Nav.Link className="navbar-font m-2" href="#link">Artikel</Nav.Link>
            <Nav.Link className="navbar-font m-2" href="#link">Tentang Kami</Nav.Link>
            <Link to="/login" className="pt-1">
            <Button variant="outline-primary" className=" h-30" >Admin</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    )
}
export default Navigasi;