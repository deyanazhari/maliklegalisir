import React,{PureComponent} from 'react'
import {Button,Card} from 'react-bootstrap'
import axios from 'axios'
import qs from 'querystring'
const api = 'https://legalisir-app.herokuapp.com'


class Coba extends PureComponent{
   constructor(props){
   super(props)
   this.state = {
    artikel:[],
    response:'',
    display:'none'
    }
   }
   componentDidMount(){
    axios.get(api+'/article').then(res=> {
        console.log(res.data.data.article)
        this.setState({
            artikel:res.data.data.article
        })
    })
   }
   render(){
    return(
    <>
    {this.state.artikel.map(artikel => 
    <div key={artikel.id}>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{artikel.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    )}
        
    </>
    )
   }
}
export default Coba;