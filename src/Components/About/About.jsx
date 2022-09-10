import React, { Component } from 'react'
import Navbar from '../navbar/Navigasi.jsx'
import {Container,Row,Col} from 'react-bootstrap'
import {FaChartLine,FaUserCheck} from 'react-icons/fa';
import {HiOfficeBuilding} from 'react-icons/hi';
import {RiTeamFill} from 'react-icons/ri';
import {MdCall} from 'react-icons/md';
import {BsFillEmojiSmileFill} from 'react-icons/bs'
import Footer from '../footer/Footer.jsx'
import './about.css'

export default class about extends Component {


  render() {
    return (
        <>
      <Navbar/>
      <Container fluid className="about__bg">
                <div className=""></div>
                <h1 className="tentang__text position-absolute top-50 start-50 translate-middle">Tentang Kami</h1>
      </Container>
      <Container fluid>
        <div className="justify-content-center text-center p-5 mt-sm-2">
          <h1>Mengapa Memilih Kami?</h1>
          <h6>Layanan Cepat & Dokumen Aman dan terjamin kerahasiaannya</h6>
        </div>
        <Row className=''>
          <Col className='col-12 col-sm-4 justify-content-center text-center p-5'>
          <i className='icon__bg'><FaChartLine className='about__icon'/></i>
          <h4 className='p-4'>PENINGKATAN JUMLAH KLIEN</h4>
          <h6>Kami melayani seluruh indonesia & luar indonesia</h6>
          </Col>
          
          <Col className='col-12 col-sm-4 justify-content-center text-center p-5 '>
          <i className='icon__bg'><HiOfficeBuilding className='about__icon'/></i>
          <h4 className='p-4'>KANTOR OPERASIONAL</h4>
          <h6>Peningkatan permohonan jasa legalisir dari hari ke hari meningkat dengan pertambahan jumlah klien</h6>
          </Col>
          <Col className='col-12 col-sm-4 justify-content-center text-center p-5'>
          <i className='icon__bg'><RiTeamFill className='about__icon'/></i>
          <h4 className='p-4'>TIM SOLID</h4>
          <h6>Tim yang berpengalaman dalam jasa legalisir dokumen & layanan VISA</h6>
          </Col>
          <Col className='col-12 col-sm-4 justify-content-center text-center p-5 mt-sm-5'>
          <i className='icon__bg'><FaUserCheck className='about__icon'/></i>
          <h4 className='p-4'>EXPERT ADVISORS</h4>
          <h6>Memberikan Saran Terbaik dibidang Legalisir Dokumen & Visa</h6>
          </Col>
          <Col className='col-12 col-sm-4 justify-content-center text-center p-5 mt-sm-5 '>
          <i className='icon__bg'><MdCall className='about__icon'/></i>
          <h4 className='p-4'>24/7 SUPPORT</h4>
          <h6>Layanan 24/7 Support Online Via WA</h6>
          </Col>
          <Col className='col-12 col-sm-4 justify-content-center text-center p-5 mt-sm-5 '>
          <i className='icon__bg'><BsFillEmojiSmileFill className='about__icon'/></i>
          <h4 className='p-4'>100% SATISFACTION</h4>
          <h6>Kepuasan Client Utama Kami</h6>
          </Col>
        </Row>
      </Container>
      <Footer/>
            </>
    )
  }
}
