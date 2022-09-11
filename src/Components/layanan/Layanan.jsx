import React, { Component } from 'react'
import Navbar from '../navbar/Navigasi'
import './Layanan.css';
import Pelayanan from '../../Assets/pelayanan.png'
import Footer from '../footer/Footer.jsx'
import axios from 'axios';
import {Container, Button, Col, Card, CardGroup} from 'react-bootstrap'
const api = "https://api.legalisirjakarta.com"
export default class Layanan extends Component {
  constructor(props){
    super(props)
    this.state = {
     layanan:[],
     response:'',
     display:'none'
     }
    }
    componentDidMount(){
     axios.get(api+'/services?page=1&per_pages=999').then(res=> {
      console.log(res.data.data)
      this.setState({
          layanan:res.data.data
      })
  })
    }
  render() {
    return (
        <>
        <Navbar/>
      <Container fluid className="home-layanan">
        <div className="text-center padding__layanan">
        <h1 className="layanan-text ">Layanan</h1>
        <div className='line__layanan'></div>
        </div>
      </Container>
      <Container fluid>
        <div className="justify-content-center text-center my-5">
        <h1 className="text-center ">Layanan Kami</h1>
        </div>
        <div className="col-12 col-sm-8 offset-sm-2 justify-content-center text-sm-center text-justify mb-5">
            <h6 className='line__height__layanan'>Kami siap membantu anda dalam hal legalisir dokumen seperti akte kelahiran, akte kematian, akte perkawinan/ akte nikah, akte cerai, buku nikah KUA, paspor, KTP, SKBM/ Surat Keterangan Belum Menikah, ijazah SMA / Universitas, rapor, SKCK, medical check up, dokumen perusahaan dan masih banyak lagi yang lainnya.Kami sudah berpengalaman selama bertahun-tahun dalam bidang ini</h6>
        </div>
        <CardGroup className="my-5 ">
        {this.state.layanan.map(layanan => 
        <Col className="col-12 col-sm-3 py-3">
        <Card className="m-2 border-0 artikel-layanan rounded-2  ">
          <div className='text-center justify-content-center'>
        <Card.Img variant="top" className="rounded-2 layanan__image pt-2"  src={layanan.imageUrl} />
        </div>
        <Card.Body>
          <Card.Title>{layanan.name}</Card.Title>
          <Card.Text className="artikel-text text-justify">
            {layanan.description}
          </Card.Text>
          <div className="text-center pt-3 pt-sm-0">
          <Button variant="info" href="https://wa.me/087793962470" >Hubungi Kami</Button>
          </div>
        </Card.Body>
      </Card>
      </Col>
      )}
      
      </CardGroup>

      </Container>
      <Footer/>
      </>
    )
  }
}
