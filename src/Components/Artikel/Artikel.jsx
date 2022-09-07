import React, { Component, useState } from 'react'; 
import './Artikel.css'
import Navbar from '../navbar/Navigasi'
import {Container, Button,Row, Col, Card, CardGroup} from 
'react-bootstrap'
import Footer from '../footer/Footer.jsx';
import axios from 'axios';

const api = "https://api.legalisirjakarta.com"
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
             console.log(res.data.data)
             this.setState({
                 artikel:res.data.data
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
            {this.state.artikel.map((artikel,id) => 
            <div className='col-sm-3 col-md-3 col-12'>
        <Card key="id"  style={{ width: '18rem' }} className="m-2 m-sm-3 border-0 artikel-layanan ">
        <Card.Img variant="top" className="rounded-2 " src={artikel.imageUrl} />
        <Card.Body className=''>
          <Card.Title maxlength="10" className='artikel__text '>{artikel.title.substring(0, 10)}</Card.Title>
          
          <Card.Text className="artikel-text text-justify">
             {artikel.description.substring(0, 100)}...
            
          </Card.Text>
          
          <Card.Link className="text-end" href="/DetailArtikel/:id">Selengkapnya </Card.Link>
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