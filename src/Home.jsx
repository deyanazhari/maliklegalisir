
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from './Components/navbar/Navigasi'
import Footer from './Components/footer/Footer.jsx'
import { Link } from 'react-router-dom';
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
     axios.get(api+'/article?page=1&per_pages=5').then(res=> {
         console.log(res.data.data)
         this.setState({
             artikel:res.data.data
         })
     })
     axios.get(api+'/services?page=1&per_pages=4').then(res=> {
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
                <h6 className="pelayanan py-3 text-sm-justify text-justify ">Jakarta Legalisir merupakan sebuah usaha penyedia jasa legalisir dokumen. Kami siap membantu anda dalam hal legalisir dokumen seperti akte kelahiran, akte kematian, akte perkawinan/ akte nikah, akte cerai, buku nikah KUA, paspor, KTP, SKBM/ Surat Keterangan Belum Menikah, ijazah SMA / Universitas, rapor, SKCK, medical check up, dokumen perusahaan dan masih banyak lagi yang lainnya.Kami sudah berpengalaman selama bertahun-tahun dalam bidang ini, dan sudah dipercaya banyak masyarakat Jakarta khususnya DKI Jakarta dan sekitarnya.</h6>
                <div className="">
                <Button variant="info" className=""  size="sm"  href="https://wa.me/6285362479992" >
                Hubungi Kami
                </Button>
                <Button variant="info"  className=" ms-3"  size="sm" href="#layanan">
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
{this.state.layanan.map(layanan => 
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel__home rounded-3">
            <Row>
                <Col className="col-md-2 col-12  ">
                  <div className='ps-sm-3 home__artikel__img'>
                    <img src={layanan.imageUrl} className="img-fluid " />
                    </div>
                </Col>
                <Col className="col-md-10 col-12">
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-justify pt-sm-4">{layanan.name}</h1>
                    <Card.Text className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify "> {layanan.description}</Card.Text>
                  <div className='mt-2 mt-sm-5'>
                    <Link to="/layanan" className='artikel__selengkapnya mt-sm-5'>Selengkapnya</Link>
                    {/* {`/DetailArtikel/${artikel.id}`} */}
                    </div>
                </Col>
            </Row>
        </Card>
        )}
        <div className="text-center">
        <Button className=" m-3" variant="info" size="sm" href="/layanan">Lihat semua layanan</Button>
        </div>
        <div className='text-center'>
            <h1 className="artikel-text2">Artikel</h1>
            <h6 className="artikel-text3">Artikel terbaru untuk menambah wawasan anda seputar legalitas</h6>
        </div>
        <CardGroup className="my-4 " id="layanan">
        {this.state.artikel.map(artikel=> 
        <Card className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" className="rounded-2 home__artikel__image" src={artikel.imageUrl} />
        <Card.Body>
          <Card.Title>{artikel.title}</Card.Title>
          <Card.Text className="artikel-text text-justify">
          {artikel.description.substring(0, 60)} .....
          
          </Card.Text>
          
            <Card.Link href={`/DetailArtikel/${artikel.id}`} className="artikel__selengkapnya">Selengkapnya</Card.Link>
          
        </Card.Body>
      </Card>
      )}
      
    </CardGroup>
    <div className="text-center botton-lihat">
    <Button className=" m-3" variant="info" size="lg" href="/artikel">Lihat Lebih Banyak</Button>
    </div>

      </Container>
      <Footer/>
    </>
  )
}
}
