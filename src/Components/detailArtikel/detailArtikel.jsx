import React, { Component } from 'react'
import Navbar from '../navbar/Navigasi.jsx'
import {Container,CardGroup, Card , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Axios from 'axios'
import './detailartikel.css'
import Footer from '../footer/Footer.jsx'
const api = "https://api.legalisirjakarta.com"
export default class detailArtikel extends Component {
    constructor(props){
        super(props)
        this.state = {
         artikel:[
         ],

         blog:[],
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
         Axios.get(api+'/article?page=1&per_pages=5').then(res=> {
         
          this.setState({
              blog:res.data.data
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
          <div className='text-center '>
            <h1 className='detailArtikel__title'>{this.state.artikel.title}</h1>
            </div>
            <h3 className='pt-2'>{this.state.artikel.createdAt}</h3>
            {/* {artikel.createdAt.substring(0, 10)} */}
            <h4 className='pb-2'>Admin</h4>
            
            <h6 className='detailArtikel__description'>{this.state.artikel.description}</h6>
        </div>
        </div>
        <div className='line'>
        <div className='detail__line'>
        </div>
        </div>
        <CardGroup className="my-4 ">
        {this.state.blog.map((blog)=>
        <Card key={blog.id} className="m-2 border-0 artikel-layanan rounded-2">
        <Card.Img variant="top" className="rounded-2" src={blog.imageUrl} />
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text className="artikel-text text-justify">
          {blog.description.substring(0,90)}
            
          </Card.Text>
        <div className='text-center'>
        <Link to={`/DetailArtikel/${blog.id}`}>
          <Button variant="info" className="justify-content-center">Selengkapnya</Button></Link>
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
