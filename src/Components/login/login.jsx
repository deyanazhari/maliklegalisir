import React,{useState, Fragment} from 'react'
import {Container,Row,Col,Button, Form} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Logo from '../../Assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import axios from 'axios';


// const API = "https://api.legalisirjakarta.com/login"
const Login = () => {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const[redirect, setRedirect] = useState(false)
    const onChangeUsername= (e) => {
        const value = e.target.value 
        setUsername (value)
    }
    const onChangePassword= (e) => {
        const value = e.target.value 
        setPassword (value)
    }
    const submitLogin = (e)=>{
        e.preventDefault();
        const data ={
            username :username,
            password : password
        }
        axios.post('https://api.legalisirjakarta.com/login',data)
        .then(result =>{
            if(result.data.code === 200){
                alert ("Selamat Login Admin"); 
                setRedirect(true)
            } else if (result.data.code === 401){
                alert('password salah')
                setRedirect(false)
            }
        })
    }
    
    

    return(
        <Fragment>
            {
                redirect && (

                    <Redirect to="/admin" />
                )
            }
        

        <section className="ftco-section">
            <Container>
                    <Row className="justify-content-center">
                        <Col className="col-md-7 col-7 col-lg-5 col-12">
                            < div className="wrap">
                                <div className='text-center justify-content-center pt-3'>
                                {/* <img src={Logo} className="img-fluid" style={{width:120,  height:120}} /> */}
                                </div>
                                <div className="login-wrap p-sm-4 p-2">
                                        <div className="d-flex">
                                            <div className="w-100">
                                                <h3 className="mb-2 mb-sm-4 text-center admin__text">LOGIN ADMIN</h3>
                                            </div>
                                        </div>
                                        <Form className="sigin-form" >
                                        {/* onSubmit={this.handleSubmitClick} */}
                                            <Form.Group className="mb-3"   >
                                                 
                                                <Form.Control type="text" placeholder="Enter username"   value={username} onChange={onChangeUsername}  />
                                                {/* value={this.state.username} onChange={this.handleChange}  */}
                                            </Form.Group>
                                            
                                            <Form.Group className="mb-3"   >
                                                <Form.Control type="password" placeholder="Password"   value={password} onChange={onChangePassword}/>
                                                {/* value={this.state.password} onChange={this.handleChange}  */}
                                            </Form.Group>
                                            
                                            <Button variant="primary" type="submit"  onClick={submitLogin}  >
                                                Submit
                                            </Button>
                                    </Form>
                                </div>
                             </div>
                             
                        </Col>
                    </Row>
            </Container>
        </section>
        </Fragment>
    )
}

export default Login;
