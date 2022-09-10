import React, { Component } from 'react'
import Navbar from '../navbar/Navigasi.jsx'
import {Container,CardGroup, Card , Button} from 'react-bootstrap';

import Axios from 'axios'
import './detailartikel.css'
import Pelayanan from '../../Assets/pelayanan.png'
import Footer from '../footer/Footer.jsx'
import bg from '../../Assets/bgDetailArtikel.jpg';
const api = "https://api.legalisirjakarta.com"
export default class detailArtikel extends Component {
    constructor(props){
        super(props)
        this.state = {
         artikel:[
         ],
         layanan:[],
         response:'',
         display:'none'
         }
        }
        componentDidMount(){   
          let articleID = this.props.match.params.id;
         Axios.get(`https://api.legalisirjakarta.com/article/${articleID}`)
         .then (res=> {
          let artikel= res.data.data
          console.log('result', artikel)
             this.setState({
              artikel : {
                id : artikel.id,
                title : artikel.title,
                imageUrl : artikel.imageUrl,
                createdAt : artikel.createdAt,
                description : artikel.description
              }
                 
             })
         })
         Axios.get(api+'/services').then(res=>{
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
      
        <div >
        <div className='text-center justify-content-center p-5 ' id={this.state.artikel.id}>
            <img src={this.state.artikel.imageUrl} className="img-fluid detail__artikel__bg__img" />
        </div>
        <div className='detail__desc'>
            <h1>{this.state.artikel.title}</h1>
            <h3 className='pt-2'>{this.state.artikel.createdAt}</h3>
            {/* {artikel.createdAt.substring(0, 10)} */}
            <h4 className='pb-2'>admin</h4>
            
            <h6 >{this.state.artikel.description}</h6>
        </div>
        </div>
        <div className='line'>
        <div className='detail__line'>
        </div>
        </div>
        <CardGroup className="my-4 ">
        {this.state.layanan.map((layanan)=>
        <Card key={layanan.id} className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" className="rounded-2" src={layanan.imageUrl} />
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
