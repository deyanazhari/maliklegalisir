import React, { Component } from 'react';
import './Artikel.css'
import Navbar from '../navbar/Navigasi'
import {Container, Button,Row, Col, Card, CardGroup} from 
'react-bootstrap'
import Pelayanan from '../../Assets/pelayanan.png'
import Footer from '../footer/Footer.jsx';
import axios from 'axios';
const api = 'https://api.legalisirjakarta.com'
export default class Artikel extends Component {
    constructor(props){
        super(props)
        this.state = {
         artikel:[],
         response:'',
         display:'none'
         }
        }
        componentDidMount(){
         axios.get(api+'/article').then(res=> {
             console.log(res.data.data.article)
             this.setState({
                 artikel:res.data.data.article
             })
         })
        }
    render(){
        return(
            <>
            <Navbar/>
            <Container fluid className="home-layanan">
                <div className=""></div>
                <h1 className="layanan-text position-absolute top-50 start-50 translate-middle">Artikel</h1>
            </Container>
            <Container fluid className="p-5">
            <div className="justify-content-center text-center p-5">
             <h1 className="layanan-kami text-center ">Artikel </h1>
            </div>
            
            <CardGroup className="my-4 ">
            {this.state.artikel.map(artikel => 
            <div className='col-sm-3 col-md-3 col-12'>
        <Card style={{ width: '18rem' }} className="m-2 m-sm-3 border-0 artikel-layanan ">
        <Card.Img variant="top" className="rounded-2 " src={artikel.imageUrl} />
        <Card.Body className=''>
          <Card.Title className='artikel__text '>{artikel.title}</Card.Title>
          <Card.Text className="artikel-text text-justify">
            {artikel.description}
            
          </Card.Text>
          <Card.Link className="text-end" href="#">Selengkapnya </Card.Link>
        </Card.Body>
      </Card>
      </div>
            )}
    </CardGroup>
                
            </Container>
            <Footer/>
            </>
        )
    }
}