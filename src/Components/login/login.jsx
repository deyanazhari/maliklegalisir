import React, {Component} from 'react'
import {Container,Row,Col,Button, Form, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Logo from '../../Assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import axios from 'axios';


const API = "https://api.legalisirjakarta.com/login"
class Login extends React.Component {
    
    state = {
        username: '',
        password: '',
        message : ''
      };
   
    
    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      };


     handleSubmitClick = (e) => {
        e.preventDefault();
        console.log('test', this.state)
        const payload={
            "username":this.state.username,
            "password":this.state.password,
        }
        console.log('check',payload)
        axios.post(API , payload,{
            headers: {
                'content-type' :'application/json'
            }
        })
        .then( function (res)  {
            console.log('aku respon', res.data.code)
            if (res.data.code===200){
                console.log('berhasil')
               
            }
        }).catch(err=>console.log(err))
    };
    
    
render() {
    return(
        <>

        <section className="ftco-section">
            <Container>
                    <Row className="justify-content-center">
                        <Col className="col-md-7 col-7 col-lg-5 col-12">
                            < div className="wrap">
                                <div className='text-center justify-content-center pt-3'>
                                <img src={Logo} className="img-fluid" style={{width:120,  height:120}} />
                                </div>
                                <div className="login-wrap p-sm-4 p-2">
                                        <div className="d-flex">
                                            <div className="w-100">
                                                <h3 className="mb-2 mb-sm-4 text-center admin__text">LOGIN ADMIN</h3>
                                            </div>
                                        </div>
                                        <Form className="sigin-form" onSubmit={this.handleSubmitClick}>
                                            <Form.Group className="mb-3"   >
                                                 
                                                <Form.Control type="text" placeholder="Enter username"value={this.state.username} onChange={this.handleChange} name="username" id="username" required /> 
                                            </Form.Group>
                                            
                                            <Form.Group className="mb-3"   >
                                                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}  name="password" id="password" required/>
                                            </Form.Group>
                                            
                                            <Button variant="primary" type="submit"  >
                                                Submit
                                            </Button>
                                    </Form>
                                </div>
                             </div>
                             
                        </Col>
                    </Row>
            </Container>
        </section>
        </>
    )
}
}
export default Login;
