import React, {Component} from 'react'
import {Form, Button, Row} from 'react-bootstrap'

import axios from 'axios'; 
class DetailArtikel extends Component{
    constructor(props){
        super(props)
        this.state = {
         artikel:[
         ],
         
         response:'',
         display:'none'
         }
        }
    
    //   handleChange = (e) => {
    //     this.setState({
    //       [e.target.id]: e.target.value
    //     })
    //   };
    
    //   handleImageChange = (e) => {
    //     this.setState({
    //       image: e.target.files[0]
    //     })
    //   };
      componentDidMount(){   
        let articleEditId = this.props.match.params.editId;
       axios.get(`https://api.legalisirjakarta.com/article/${articleEditId}`)
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
    }
    
    //   handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    //     let articleEditId = this.props.match.params.id
    //     let form_data = new FormData();
    //     form_data.append('image', this.state.image, this.state.image.name);
    //     form_data.append('title', this.state.title);
    //     form_data.append('description', this.state.description);
    //     let url = `https://api.legalisirjakarta.com/article/${articleEditId}`;
    //     axios.put(url, form_data, {
    //       headers: {
    //         'content-type': 'multipart/form-data'
    //       }
    //     })
    //         .then(res => {
    //           console.log(res.data);
    //         })
    //         .catch(err => console.log(err))
    //   };
    render(){
        return(
            <>
            <div class="d-flex"  >
            
            <div class="bg-white" id="sidebar-wrapper">
                <div class="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">Legalisir Jakarta</div>
                <div class="list-group list-group-flush my-3">
                    <a href="/Admin" class="list-group-item list-group-item-action bg-transparent second-text "><i
                            class="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                    <a href="/Admin/Artikel" class="list-group-item list-group-item-action bg-transparent second-text fw-bold active"><i
                            class="fas fa-project-diagram me-2"></i>Artikel</a>
                    <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                            class="fas fa-power-off me-2"></i>Logout</a>
                </div>
            </div>
           
            <div id="page-content-wrapper">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                    <div class="d-flex align-items-center">
                        <i class="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                        <h2 class="fs-2 m-0">Edit Artikel</h2>
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fas fa-user me-2"></i>Admin
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Form 
                >
                <Form.Group  className="mb-3 mb-sm-5 px-sm-5" id={this.state.artikel.id} >
                        <Row>
                        <Form.Label className='col-sm-2 col-form-label col-12 artikel__adm__text'></Form.Label>
                        <Form.Control className='col-sm-10 col-12 artikel__adm__text2 artikel__file' type="file"  aria-describedby="inputGroupFileAddon03" aria-label="Upload" name="imageUrl" multiple
                       
                        
                        > </Form.Control>
                        </Row>
                    </Form.Group>
                    <Form.Group  className="mb-3 px-sm-5" controlId="exampleForm.ControlInput1">
                        <Row>
                        <Form.Label className='col-sm-2 col-form-label col-12 artikel__adm__text'> {this.state.artikel.title}</Form.Label>
                        <Form.Control className='col-sm-10 col-12 artikel__adm__text2' type="text" placeholder=""  name="title"
                        
                            
                        />
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 px-sm-5" controlId="exampleForm.ControlTextarea1">
                        <Row>
                        <Form.Label className='col-sm-2 col-form-label artikel__adm__text'></Form.Label>
                        <Form.Control className='col-sm-10 col-12 artikel__adm__text2' placeholder=""name="description" 
                         as="textarea" rows={6} > </Form.Control>
                        </Row>
                    </Form.Group>
                    <Button variant="info" type="submit" name="submit" >Submit</Button>
                </Form>
                
                    
                
            </div>
        </div>
        </>
        )
    }
}
export default DetailArtikel;