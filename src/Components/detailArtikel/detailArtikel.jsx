import React, { Component } from 'react'
import Navbar from '../navbar/Navigasi.jsx'
import {Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './detailartikel.css'
import Footer from '../footer/Footer.jsx'
import bg from '../../Assets/bgDetailArtikel.jpg';
const api = "https://api.legalisirjakarta.com"
export default class detailArtikel extends Component {
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
  render() {
    return (
        <>
      <Navbar/>
      <Container fluid>
      {this.state.artikel.map((artikel,id) => 
        <div key={artikel.id}>
        <div className='text-center justify-content-center p-5 '>
            <img src={bg} className="img-fluid " />
        </div>
        <div className='detail__desc'>
            <h1>{artikel.title}</h1>
            <h3 className='pt-2'>{artikel.createdAt}</h3>
            <h4 className='pb-2'>admin</h4>
            
            <h6 >{artikel.description}</h6>
        </div>
        </div>
        )}
      </Container>
      <Footer/>

      </>
    )
  }
}
