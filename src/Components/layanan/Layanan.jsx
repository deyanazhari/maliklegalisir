import React, { Component } from 'react'
import Navbar from '../navbar/Navigasi'
import './Layanan.css';
import Pelayanan from '../../Assets/pelayanan.png'
import Footer from '../footer/footer'
import {Container, Button, Col, Card, CardGroup} from 'react-bootstrap'

export default class Layanan extends Component {
  render() {
    return (
        <>
        <Navbar/>
      <Container fluid className="home-layanan">
        <div className=""></div>
        <h1 className="layanan-text position-absolute top-50 start-50 translate-middle">Layanan</h1>
        
      </Container>
      <Container fluid>
        <div className="justify-content-center text-center my-5">
        <h1 className="layanan-kami text-center ">Layanan Kami</h1>
        
        </div>
        <div className="col-12 col-sm-8 offset-sm-2 justify-content-center text-sm-center text-justify mb-5">
            <h6>Kami melayani legalisir dokumen perusahaan, legalisir ijazah, legalisir transkrip nilai, legalisir surat keterangan belum menikah/skbm, legalisir skck/police record, legalisir akte kelahiran, legalisir akte kematian, legalisir akte perkawinan, legalisir akte cerai, legalisir buku nikah, legalisir surat perjanjian, legalisir surat pengalaman kerja, legalisir surat kuasa, legalisir medical, legalisir kemenristek dikti dan lain sebagainya.</h6>
        </div>
        <CardGroup className="my-4 ">
        <Col className="col-12 col-sm-3">
        <Card className="m-2 border-0 artikel-layanan rounded-2 ">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            
          </Card.Text>
          <div className="text-center">
          <Button variant="info" >Hubungi Kami</Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-12 col-sm-3">
        <Card className="m-2 border-0 artikel-layanan rounded-2 ">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            
          </Card.Text>
          <div className="text-center">
          <Button variant="info" >Hubungi Kami</Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-12 col-sm-3">
        <Card className="m-2 border-0 artikel-layanan rounded-2 ">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            
          </Card.Text>
          <div className="text-center">
          <Button variant="info" >Hubungi Kami</Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-12 col-sm-3">
        <Card className="m-2 border-0 artikel-layanan rounded-2 ">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            
          </Card.Text>
          <div className="text-center">
          <Button variant="info" >Hubungi Kami</Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
      <Col className="col-12 col-sm-3">
        <Card className="m-2 border-0 artikel-layanan rounded-2 ">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            
          </Card.Text>
          <div className="text-center">
          <Button variant="info" >Hubungi Kami</Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
      
      </CardGroup>
      <Footer/>
      </Container>
      </>
    )
  }
}
