import React, { Component} from 'react'; 
import {Navigate } from 'react-router-dom';
import './Artikel.css'
import Navbar from '../navbar/Navigasi'
import {Container, Row, Col, Card} from 
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
         axios.get(api+'/article?page=1&per_pages=5').then(res=> {
             console.log(res.data.data)
             this.setState({
                 artikel:res.data.data
             })
         })
        }

        handleDetail = (id, props) => {
            this.props.history.push(`/DetailArtikel/${id}`)
        }
    render(){
        return(
            <> 
            <Navbar/>
            <Container fluid className="home-layanan">
                <div className=""></div>
                <h1 className="layanan-text position-absolute top-50 start-50 translate-middle">Artikel</h1>
            </Container>
            <Container fluid className="p-5 pb-5 artikel__body ">
            <div className="justify-content-center text-center p-5">
             <h1 className="layanan-kami text-center ">Artikel </h1>
            </div>
            
            
            {this.state.artikel.map(artikel => 
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel rounded-3 " goDetail={this.handleDetail}>
            <Row>
                <Col className="col-md-2 col-12  ">
                  <div className='home__artikel__img text-center justify-content-center'>
                    <img src={artikel.imageUrl} className="img-fluid " />
                    </div>
                </Col>
                <Col className="col-md-10 col-12" >
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-justify pt-sm-4 pt-3">{artikel.title}</h1>
                    <h6 className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify "> {artikel.description.substring(0, 270)}...</h6>
                    <div className='pt-sm-5 pt-5 ps-3 ps-sm-0' >
                    <Card.Link href="#" className=''onClick={() => artikel.goDetail}>Selengkapnya</Card.Link>
                    </div>
                </Col>
            </Row>
        </Card>
        
        )}
            </Container>
            <Footer/>
            </>
        )
    }
}