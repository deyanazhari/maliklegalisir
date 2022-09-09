import React, { Component } from 'react'
import Navbar from '../navbar/Navigasi.jsx'
import {Container,CardGroup, Card , Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './detailartikel.css'
import Pelayanan from '../../Assets/pelayanan.png'
import Footer from '../footer/Footer.jsx'
import bg from '../../Assets/bgDetailArtikel.jpg';
const api = "https://api.legalisirjakarta.com"
export default class detailArtikel extends Component {
    constructor(){
        super()
        this.state = {
         artikel:[],
         layanan:[],
         response:'',
         display:'none'
         }
        }
        componentDidMount(){   
         axios.get(api+'/article?page=1&per_pages=1').then(res=> {
             this.setState({
                 artikel:res.data.data
             })
         })
         axios.get(api+'/services').then(res=>{
          this.setState({
            layanan : res.data.data
          })
         })
         
        }
  render() {
    return (
        <>
      <Navbar/>
      <Container fluid>
      {this.state.artikel.map((artikel) => 
        <div key={artikel.id}>
        <div className='text-center justify-content-center p-5 '>
            <img src={bg} className="img-fluid " />
        </div>
        <div className='detail__desc'>
            <h1>{artikel.title}</h1>
            <h3 className='pt-2'>{artikel.createdAt.substring(0, 10)}</h3>
            <h4 className='pb-2'>admin</h4>
            
            <h6 >{artikel.description}</h6>
        </div>
        </div>
        )}
        <div className='line'>
        <div className='detail__line'>
        </div>
        </div>
        <CardGroup className="my-4 ">
        {this.state.layanan.map((layanan)=>
        <Card key={layanan.id} className="m-2 border-0 artikel-layanan rounded-2">
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
      </Container>
      <Footer/>

      </>
    )
  }
}
