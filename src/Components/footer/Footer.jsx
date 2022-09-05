import { render } from '@testing-library/react';
import React, { Component } from 'react'
import {Container, Row, Button} from 'react-bootstrap'
import Instagram from '../../Assets/instagram.png'
import Whatsapp from '../../Assets/whatsapp.png'
import Tiktok from '../../Assets/tik_tok.png'
import Facebook from '../../Assets/facebook.png'
import './Footer.css';

function Footer(){

	
		return(
			<>

			<Container fluid className='con__footer'>
				<Row className='justify-content-center text-center'>
			<h1 className='con__text'>Legalisir Jakarta</h1>
			<h6 className='foot__text p-5'>Jl.Swadaya Pam No.32, RT.6/RW.7. Jatinegara Kec. Cakung Kota Jakarta Timur<br/> Daerah Khusus Ibukota Jakarta <br/>13930</h6>
			<div className='foot__bot'>
			<img className="foot__img" src={Instagram}/>
			<a  data-toggle="tooltip" data-placement="top" title="Twitter" href="https://wa.me/6285362479992">
			<img className="foot__img mx-4"  src={Whatsapp}/></a>
			<img className="foot__img " src={Tiktok}/>
			<img className="foot__img mx-4" src={Facebook}/>
			</div>
			</Row>
			</Container>
			</>
		)
	
}

export default Footer;

