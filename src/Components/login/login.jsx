import React from 'react'
import {Container,Row,Col,Button, Form, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Bg from './images/bg-1.jpg'

function Login() {
    return(
        <>
        {/* <Row className="justify-content-center">
          <Col className="col-md-7 col-7 col-lg-5">
              <div className="wrap">
                      <div className="login-wrap p-4 p-5">
                          <div className="d-flex">
                              <div className="w-100">
                                  <h3 className="mb-4">Login | Admin</h3>
                              </div>
                          <Form className="signin-form">
                              <Form.Group className="mt-3">
                                  <Form.Input type="text" className="form-control" >
                                      <Form.Label className="form-control-placeholder" id="username">Username</Form.Label>
                                  </Form.Input>
                              </Form.Group>
                              <Form.Group>
                                  <Form.Input id="password-field"
                                  type="password"
                                  className="form-control"
                                  
                                  >
                                      <Form.Label className="form-control-placeholder">Password
                                          
                                      </Form.Label>
                                  </Form.Input>
                              </Form.Group>
                              <Form.Group>
                                  <Button 
                                  type="submit"
                                  className="form-control btn btn-primary rounded submit px-3">
                                      Login
                                  </Button>
                              </Form.Group>
                          </Form>
                      </div>
                   </div>
              </div>
          </Col>
        </Row> */}
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
                                                
                                                <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            
                                            <Button variant="primary" type="submit">
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
export default Login;
