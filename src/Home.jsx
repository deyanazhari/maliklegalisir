import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from './Components/navbar/Navigasi'
import Footer from './Components/footer/Footer.jsx'
import React from 'react';
import {Container,Col,Button,Card, Row, CardGroup} from 'react-bootstrap';

//css
import './home.css';
//import image Assets
import Homeicon from './Assets/homeicon.png'
import Pelayanan from './Assets/pelayanan.png'
function Home() {
  return (
    <>
    <Navigasi/>
    <Container fluid >
      <Container fluid>
        <Row className="mt-sm-5 mt-3 ms-sm-5">
            <Col className="col-sm-7 col-12 pt-sm-5 mt-3">
                <h4 className="jasa">Jasa Legalisir Indonesia</h4>
                <h6 className="pelayanan py-3 text-sm-justify ">Pelayanan Lengkap, cepat, dan terpercaya. Dengan <br/> pengalaman kami yang sudah bertahun tahun</h6>
                <div className="">
                <Button variant="info" className=""  size="sm"  href="https://wa.me/6285362479992" >
                Hubungi Kami
                </Button>
                <Button variant="info"  className=" ms-3"  size="sm">
                    Lihat Layanan
                </Button>
                </div>
            </Col>
            <Col className="col-sm-5 col-12 ">
              <img className="home-icon " src={Homeicon}/>
            </Col>
        </Row>
        </Container>
        <div className="text-center pt-sm-5 mt-sm-5 mt-2">
            <h1 className="temukan">Temukan Pelayanan <br/> Terbaik Kami</h1>
            <h6 className="pelayanan-cepat pt-sm-5">Pelayanan Cepat, Aman, dan sudah di percaya oleh pelanggan kami <br/> selama bertahun tahun</h6>
        </div>
        
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel rounded-3">
            <Row>
                <Col className="col-md-2 col-12">
                    <Card.Img src={Pelayanan} className="img-fluid"/>
                </Col>
                <Col className="col-md-10 col-12">
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-justify pt-sm-4">Akta Kematian</h1>
                    <Card.Text className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify "> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque ipsa, ut esse, obcaecati officia laboriosam iusto unde eum perspiciatis incidunt velit maxime numquam iure odio hic voluptatum nemo accusantium? </Card.Text>
                </Col>
            </Row>
        </Card>
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel rounded-3">
            <Row>
                <Col className="col-md-2 col-12">
                    <Card.Img src={Pelayanan} className="img-fluid"/>
                </Col>
                <Col className="col-md-10 col-12">
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-justify pt-sm-4">Akta Kematian</h1>
                    <Card.Text className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify "> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque ipsa, ut esse, obcaecati officia laboriosam iusto unde eum perspiciatis incidunt velit maxime numquam iure odio hic voluptatum nemo accusantium? </Card.Text>
                    
                </Col>
            </Row>
        </Card>
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel rounded-3">
            <Row>
                <Col className="col-md-2 col-12">
                    <Card.Img src={Pelayanan} className="img-fluid"/>
                </Col>
                <Col className="col-md-10 col-12">
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-justify pt-sm-4">Akta Kematian</h1>
                    <Card.Text className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify "> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta cumque ipsa, ut esse, obcaecati officia laboriosam iusto unde eum perspiciatis incidunt velit maxime numquam iure odio hic voluptatum nemo accusantium? </Card.Text>
                    <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
                </Col>
            </Row>
        </Card>
        
        
        <div className="text-center">
        <Button className=" m-3" variant="info" size="sm">Lihat semua layanan</Button>
        </div>
        <div className='text-center'>
            <h1 className="artikel-text2">Artikel</h1>
            <h6 className="artikel-text3">Artikel terbaru untuk menambah wawasan anda seputar legalitas</h6>
        </div>
        <CardGroup className="my-4 ">
        <Card className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel rounded-2" >
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body className="border-0">
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" src={Pelayanan} className="rounded-2" />
        <Card.Body >
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      <Card className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" src={Pelayanan} className="rounded-2" />
        <Card.Body >
          <Card.Title>Card title</Card.Title>
          <Card.Text className="artikel-text text-justify">
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      
    </CardGroup>
    <div className="text-center botton-lihat">
    <Button className=" m-3" variant="info" size="sm">Lihat Lebih Banyak</Button>
    </div>

      </Container>
      <Footer/>
    </>
  );
}
export default Home;