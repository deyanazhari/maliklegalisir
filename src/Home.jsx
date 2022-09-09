import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from './Components/navbar/Navigasi'
import Footer from './Components/footer/Footer.jsx'
import { useParams } from 'react-router-dom';
import React, {Component} from 'react';
import {Container,Col,Button,Card, Row, CardGroup} from 'react-bootstrap';
import axios from 'axios';

//css
import './home.css';
//import image Assets
import Homeicon from './Assets/homeicon.png'
import Pelayanan from './Assets/pelayanan.png'
const api = "https://api.legalisirjakarta.com"
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
     artikel:[],
     layanan:[],
     response:'',
     display:'none'
     }
    }
    componentDidMount(){
     axios.get(api+'/article?page=1&per_pages=4').then(res=> {
         console.log(res.data.data)
         this.setState({
             artikel:res.data.data
         })
     })
     axios.get(api+'/services?page=1&per_pages=5').then(res=> {
      console.log(res.data.data)
      this.setState({
          layanan:res.data.data
      })
  })
    }
render(){
  return(
    <>
    <Navigasi/>
    <Container fluid >
      <Container fluid>
        <Row className="mt-sm-5 mt-3 ms-sm-5">
            <Col className="col-sm-7 col-12 pt-sm-5 mt-3">
                <h4 className="jasa">Legalisir Jakarta</h4>
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
              <div className='text-sm-end text-center ms-sm-3'>
              <img className="home-icon " src={Homeicon}/>
              </div>
            </Col>
        </Row>
        </Container>
        <div className="text-center pt-sm-5 mt-sm-5 mt-2">
            <h1 className="temukan">Temukan Pelayanan <br/> Terbaik Kami</h1>
            <h6 className="pelayanan-cepat pt-sm-5">Pelayanan Cepat, Aman, dan sudah di percaya oleh pelanggan kami <br/> selama bertahun tahun</h6>
        </div>
{this.state.artikel.map(artikel => 
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel rounded-3">
            <Row>
                <Col className="col-md-2 col-12  ">
                  <div className='home__artikel__img'>
                    <img src={artikel.imageUrl} className="img-fluid " />
                    </div>
                </Col>
                <Col className="col-md-10 col-12">
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-justify pt-sm-4">{artikel.title}</h1>
                    <Card.Text className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify "> {artikel.description.substring(0, 300)}...</Card.Text>
                </Col>
            </Row>
        </Card>
        )}
        
        
        <div className="text-center">
        <Button className=" m-3" variant="info" size="sm">Lihat semua layanan</Button>
        </div>
        <div className='text-center'>
            <h1 className="artikel-text2">Artikel</h1>
            <h6 className="artikel-text3">Artikel terbaru untuk menambah wawasan anda seputar legalitas</h6>
        </div>
        <CardGroup className="my-4 ">
        {this.state.layanan.map(layanan => 
        <Card className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" className="rounded-2" src={Pelayanan} />
        <Card.Body>
          <Card.Title>{layanan.name}</Card.Title>
          <Card.Text className="artikel-text text-justify">
          {layanan.description}
            
          </Card.Text>
        <div className='text-center'>
          <Button variant="info" className="justify-content-center">Hubungi Kami</Button>
          </div>
        </Card.Body>
      </Card>
      )}
      
    </CardGroup>
    <div className="text-center botton-lihat">
    <Button className=" m-3" variant="info" size="lg">Lihat Lebih Banyak</Button>
    </div>

      </Container>
      <Footer/>
    </>
  )
}
}
