import React, {Component} from 'react'
import {Form, Button, Row} from 'react-bootstrap'

import axios from 'axios'; 
class DetailArtikel extends Component{

    render(){
        return(
            <>
            <div class="d-flex" id="wrapper">
            
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
                <Form.Group  className="mb-3 mb-sm-5 px-sm-5" >
                        <Row>
                        <Form.Label className='col-sm-2 col-form-label col-12 artikel__adm__text'>Gambar</Form.Label>
                        <Form.Control className='col-sm-10 col-12 artikel__adm__text2 artikel__file' type="file"  aria-describedby="inputGroupFileAddon03" aria-label="Upload" name="imageUrl" multiple
                       
                        
                        ></Form.Control>
                        </Row>
                    </Form.Group>
                    <Form.Group  className="mb-3 px-sm-5" controlId="exampleForm.ControlInput1">
                        <Row>
                        <Form.Label className='col-sm-2 col-form-label col-12 artikel__adm__text'>Judul</Form.Label>
                        <Form.Control className='col-sm-10 col-12 artikel__adm__text2' type="text" placeholder="Masukkan judul artikel" name="title"
                        
                            
                        />
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3 px-sm-5" controlId="exampleForm.ControlTextarea1">
                        <Row>
                        <Form.Label className='col-sm-2 col-form-label artikel__adm__text'>Deskripsi</Form.Label>
                        <Form.Control className='col-sm-10 col-12 artikel__adm__text2' placeholder='Masukkan Deskripsi artikel'name="description" 
                         as="textarea" rows={6} />
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