import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from './Components/navbar/Navigasi'
import Footer from './Components/footer/footer'
import React from 'react';
import {Container,Col,Button,Card, Row, CardGroup} from 'react-bootstrap';
//css
import './home.css';
//import image Assets
import Akta from './Assets/Akta.jpg'
import Homeicon from './Assets/homeicon.png'
function Home() {
  return (
    <>
    <Navigasi/>
    <Container fluid >
      <Container>
        <Row className="mt-sm-5 mt-2 mx-2">
            <Col className="col-sm-6 col-12 pt-sm-5 pt-1">
                <h4 className="jasa">Jasa Legalisir Indonesia</h4>
                <h6 className="pelayanan">Pelayanan Lengkap, cepat, dan terpercaya. <br/> Dengan pengalaman kami yang sudah bertahun tahun</h6>
                <div className="pt-sm-4 pt-1">
                <Button variant="primary" size="sm" active>
                    Hubungi Kami
                </Button>{' '}
                <Button  variant="primary" size="sm" active>
                    Lihat Layanan
                </Button>
                </div>
            </Col>
            <Col className="col-sm-6 col-12">
              <img className="home-icon" src={Homeicon}/>
            </Col>
        </Row>
        </Container>
        <div className="text-center pt-5">
            <h1 className="temukan">Temukan Pelayanan <br/> Terbaik Kami</h1>
            <h6 className="pelayanan-cepat">Pelayanan Cepat, Aman, dan sudah di percaya oleh pelanggan kami <br/> selama bertahun tahun</h6>
        </div>
        <Card className="mt-3 border-0 artikel">
            <Row>
                <Col className="col-md-2 col-12">
                    <Card.Img src={Akta} className="img-fluid m-1 ms-1"/>
                </Col>
                <Col className="col-md-10 col-12">
                    <Card.Title className="mt-2">Akta Kematian</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque ipsa, ut esse, obcaecati officia laboriosam iusto unde eum perspiciatis incidunt velit maxime numquam iure odio hic voluptatum nemo accusantium? </Card.Text>
                </Col>
            </Row>
        </Card>
        <Card className="mt-3 border-0 artikel">
            <Row>
                <Col className="col-md-2 col-12">
                    <Card.Img src={Akta} className="img-fluid m-1 ms-1"/>
                </Col>
                <Col className="col-md-10 col-12">
                    <Card.Title className="mt-2">Akta Kematian</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque ipsa, ut esse, obcaecati officia laboriosam iusto unde eum perspiciatis incidunt velit maxime numquam iure odio hic voluptatum nemo accusantium? </Card.Text>
                </Col>
            </Row>
        </Card>
        <Card className="mt-3 border-0 artikel">
            <Row>
                <Col className="col-md-2 col-12">
                    <Card.Img src={Akta} className="img-fluid mt-1 m-1"/>
                </Col>
                <Col className="col-md-10 col-12">
                    <Card.Title className="mt-2">Akta Kematian</Card.Title>
                    <Card.Text> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque ipsa, ut esse, obcaecati officia laboriosam iusto unde eum perspiciatis incidunt velit maxime numquam iure odio hic voluptatum nemo accusantium? </Card.Text>
                </Col>
            </Row>
        </Card>
        <div className="text-center">
        <Button className=" m-3" variant="primary" size="sm">Lihat semua layanan</Button>
        </div>
        <div className='text-center'>
            <h1>Artikel</h1>
            <h6>Artikel terbaru untuk menambah wawasan anda seputar legalitas</h6>
        </div>
        <CardGroup className="mt-2">
        <Card className="m-2 border-0 artikel">
        <Card.Img variant="top" src={Akta} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel">
        <Card.Img variant="top" src={Akta} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel" >
        <Card.Img variant="top" src={Akta} />
        <Card.Body className="border-0">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel">
        <Card.Img variant="top" src={Akta} />
        <Card.Body >
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel" >
        <Card.Img variant="top" src={Akta} />
        <Card.Body >
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
    </CardGroup>
    <Footer/>
      </Container>
    </>
  );
}
export default Home;