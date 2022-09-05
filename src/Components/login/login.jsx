import React, {useState, Fragment} from 'react'
import {Container,Row,Col,Button, Form, Card} from 'react-bootstrap';
import {Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import axios from 'axios';

    


const Login =() => {

    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState('false')
    
        const onChangeUsername = (e) => {
            const value = e.target.value
            setUsername(value)
        }
        const onChangePassword = (e) => {
            const value = e.target.value 
            setPassword(value)
        }
        const submitLogin = () => {
            const data ={
                username: username,
                password: password
            }
            axios.post('https://api.legalisirjakarta.com/login', data)
            .then(result => {
                if(result){
                    localStorage.setItem('id', result.data.id)
                    setNavigate(true)
                }
                console.log(result.data.id)
        })
        }

    return(
        <>
        <Fragment>
            {
                navigate && (
                    <Navigate to="/Admin"/>
                )
            }
        <section className="ftco-section">
            <Container>
                    <Row className="justify-content-center">
                        <Col className="col-md-7 col-7 col-lg-5 col-12">
                            < div className="wrap">
                                <div className="img"></div>
                                <div className="login-wrap p-sm-4 p-2">
                                        <div className="d-flex">
                                            <div className="w-100">
                                                <h3 className="mb-2 mb-sm-4">Login Admin</h3>
                                            </div>
                                        </div>
                                        <Form className="sigin-form">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                
                                                <Form.Control type="text" placeholder="Enter email" value={username} onChange={onChangeUsername} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                                            </Form.Group>
                                            
                                            <Button variant="primary" type="submit" onClick={submitLogin}>
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
        </>
    )
}
export default Login;
