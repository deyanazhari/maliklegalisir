import React from 'react';
import {Container,Navbar,Nav,Button} from 'react-bootstrap';
import LogoUtama from '../../Assets/logo.png'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
function Navigasi(){

    return(
      <Navbar  expand="lg" className="navbar px-3">
      <Container fluid  className="navbar-color">
        <div className='ps-2'>
      <img
              src={LogoUtama}
              width="45"
              height="45"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </div>
        <Navbar.Brand href="#home" className="navbar-malik mx-sm-4">Legalisir Jakarta</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav ">
          <Nav>
            <Nav.Link className="navbar-font m-2" href="/">Beranda</Nav.Link>
            
            <Nav.Link className="navbar-font m-2" href="/Layanan">Layanan</Nav.Link>
            
            <Nav.Link className="navbar-font m-2" href="/Artikel">Artikel</Nav.Link>
            <Nav.Link className="navbar-font m-2" href="/TentangKami">Tentang Kami</Nav.Link>
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