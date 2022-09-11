import React, { Component} from 'react'; 
import {useParams } from 'react-router-dom';
import './Artikel.css'
import Navbar from '../navbar/Navigasi'
import { Link } from 'react-router-dom';
import {Container, Row, Col, Card} from 
'react-bootstrap'
import { History } from 'react-router-dom';
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
         axios.get(api + '/article?page=1&per_pages=999').then(res=> {
             
             this.setState({
                 artikel:res.data.data
             })
         })
        }

        handleDetail = (id) => {
            this.props.history.push(`/DetailArtikel/${id}`)
        }
        
    render(props){
        return(
            <> 
            <Navbar/>
            <Container fluid className="home-layanan">
                <div className="text-center padding__artikel">
                <h1 className="layanan-text ">Artikel</h1>
                <div className='line__artikel'></div>
                </div>
            </Container>
            <Container fluid className="p-5 pb-5 artikel__body ">
            <div className="justify-content-center text-center p-5">
             <h1 className="layanan-kami text-center ">Artikel </h1>
            </div>
            
            
            {this.state.artikel.map(artikel => 
        <Card className="my-sm-4 my-3 mx-sm-2 border-0 artikel__artikel rounded-3 " key={artikel.id} godetail={this.handleDetail}>
            <Row>
                <Col className="col-md-2 col-12  ">
                  <div className='artikel__img text-center justify-content-center'>
                    <img src={artikel.imageUrl} className="img-fluid " />
                    </div>
                </Col>
                <Col className="col-md-10 col-12" >
                    <h1 className="artikel-title m-3 mr-sm-5 m-sm-0 text-sm-justify pt-sm-4 pt-3">{artikel.title}</h1>
                    <h6 className="artikel-text m-3 mr-sm-5 m-sm-0 text-justify "> {artikel.description.substring(0, 270)}...</h6>
                    <div className='pt-sm-5  ms-3 ps-sm-0' >
                    <Link to={`/DetailArtikel/${artikel.id}`}  className='artikel__selengkapnya' >Selengkapnya</Link>
                    </div>
                    {/* href={`/DetailArtikel/${artikel.id}`}  */}
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