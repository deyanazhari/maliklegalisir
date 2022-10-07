
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigasi from './Components/navbar/Navigasi'
import Footer from './Components/footer/Footer.jsx'
import { Link } from 'react-router-dom';
import React, {Component,useState} from 'react';
import {Container,Col,Button,Card, Row, CardGroup,Carousel} from 'react-bootstrap';
import axios from 'axios';
//css
import './home.css';
//import image Assets
import Homeicon from './Assets/homeicon.png'

const api = "https://api.legalisirjakarta.com"
export default class Home extends Component {
  
  constructor(props){
    super(props)
    this.state = {
     artikel:[],
     blog:[],
     layanan:[],
     response:'',
     display:'none'
     }
    }
    componentDidMount(){
     axios.get(api+'/article?page=1&per_pages=5').then(res=> {
         
         this.setState({
             artikel:res.data.data
         })
     })
     axios.get(api+'/article?page=1&per_pages=1').then(res=> {
         
      this.setState({
          blog:res.data.data
      })
  })
     axios.get(api+'/services?page=1&per_pages=3').then(res=> {
      
      this.setState({
          layanan:res.data.data
      })
  })
    
}
render(){
  return(
    <>
    <Navigasi/>
    <Container fluid>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
  {this.state.blog.map(blog=>
    <div className="carousel-item active">
    
    
      <img src={blog.imageUrl} class="d-block w-100 carousel-img" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='text-white carousel__text'><Link className='text-white'>{blog.title}</Link></h5>
        <p className='text-white carousel__description'>{blog.description.substring(0, 60)}...</p>
        </div>
      
      
    </div>
    )}
   
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
    </Container>
    <Container fluid >
  
     
        <div className="text-center pt-sm-5 mt-sm-5 mt-2 text__temukan">
            <h1 className="temukan">Temukan Berita <br/> Terbaru</h1>
            {/* <h6 className="pelayanan-cepat pt-sm-5 py-4 py-sm-0">Pelayanan Cepat, Aman, dan sudah di percaya oleh pelanggan kami <br/> selama bertahun tahun</h6> */}
        </div>
{this.state.artikel.map(artikel => 
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel__home rounded-3 " id="layanan">
            <Row>
                <Col className="col-md-4 col-12  ">
                  <div className='ps-sm-3 pt-2 pt-sm-0 home__artikel__img'>
                    <img src={artikel.imageUrl} className="img-fluid " />
                    </div>
                </Col>
                <Col className="col-md-8 col-12">
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-justify pt-sm-4">{artikel.title}</h1>
                    <Card.Text className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify pb-2 "> {artikel.description.substring(0,200)}...</Card.Text>
                  <div className='mt-5 mt-sm-5 text-end pe-3'>
                    <Link to={`/DetailArtikel/${artikel.id}`} className='artikel__selengkapnya mt-sm-5 ms-3 ms-sm-0'>Selengkapnya</Link>
                    {/* {`/DetailArtikel/${artikel.id}`} */}
                    </div>
                </Col>
            </Row>
        </Card>
        )}
        <div className="text-center">
        <Button className=" m-3" variant="info" size="sm" href="/artikel">Lihat Semua Berita</Button>
        </div>
        <div className=' text-start  ps-sm-3'>
            <h1 className="artikel-text2">Berita Terakhir</h1>
            
        </div>
        <CardGroup className="my-4 ">
        {this.state.artikel.map(artikel=> 
        <Card className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" className="rounded-2 home__artikel__image pt-2" src={artikel.imageUrl} />
        <Card.Body>
          <Card.Title>{artikel.title}</Card.Title>
          <Card.Text className="artikel-text text-justify">
          {artikel.description.substring(0, 70)} .....
          
          </Card.Text>
          <div className='text-end'>
            <Card.Link href={`/DetailArtikel/${artikel.id}`} className="artikel__selengkapnya">Selengkapnya</Card.Link>
            </div>
        </Card.Body>
      </Card>
      )}
      
    </CardGroup>

      </Container>
      <Footer/>
    </>
  )
}
}
