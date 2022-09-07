import React, {Component} from 'react'
import {Form, Button, Row} from 'react-bootstrap'
import './Artikel.css'
import axios from 'axios';
class Artikel extends Component{

    state = {
        title: '',
        description: '',
        image: null
      };
    
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      };
    
      handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        let url = 'https://api.legalisirjakarta.com/article';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
      };

        
    //     state = {
    //         title: "",
    //         description: "",
    //         imageUrl : null
    //     }

    // async handleFile  =(e) = >{

    //     // let imageUrl = e.target.files
    //     // this.setState({image:imageUrl})
    //     // let title = e.target.text 
    //     // this.setState({title:title})
    //     // let description = e.target.text 
    //     // this.setState({description:description})
        
        
    // }
    
    //  handleUpload = async (e) =>{
        
    //     let formdata = new FormData()
    //     formdata.append('title', title)
    //     formdata.append('description', description)
    //     formdata.append('image',imageUrl)

        
    //     axios({
    //         url : 'https://api.legalisirjakarta.com/article',
    //         method: "POST",
    //         headers:{
    //             'Content-Type' : 'multipart/form-data'
    //         },
    //         data: formdata
            
    //     })
    //     .then(res => {

    //     },(err) => {

    //     })
    // }


    // const [data, setDate] = useState([])
    // const [title, setTitle] = useState ('')
    // const [description, setDescription ] = useState('')
    // const [imageUrl, setImageUrl] = useState('')
    // const [body, setBody] = useState('')

    // useEffect(() => {
    //     axios.get('https://api.legalisirjakarta.com/article')
    //     .then(res => {
            
    //         setDate(res.data)
    //     }).catch(err => console.log(err))
    // },[])
    // const postData = (e) => {
    //     e.preventDefault();
    //     axios.post ('https://api.legalisirjakarta.com/article',{
    //         title,
    //         description,
    //         imageUrl
    //     }).then(res => console.log('posting data',res)).catch(err => console.log(err))
    // } 
    
    // const API = "https://api.legalisirjakarta.com/article"
    // const [data, setData] = useState ({
    //     title: "",
    //     description : "",
    //     imageUrl : ""
    // })
    // function submit(e) {
    //     e.preventDefault();
    //     axios.post(API,{
    //         title : data.title,
    //         description : data.description,
    //         imageUrl: data.imageUrl
    //     })
    // }
    // function handle(e){
    //     const newdata={...data}
    //     newdata[e.target.id] = e.target.value 
    //     setData(newdata)
    //     console.log(newdata)
    // }

    // constructor(){
    //     super()
    //     this.state = {
    //     users:[],
    //     title: null,
    //     description: null,
    //     imageUrl: ""
        

    //     }
    // }
    // saveDataToAPI(e){
    //     e.preventDefault()
       
    //     const artikel = {
    //     title :this.state.title,
    //     description:this.state.description,
    //     imageUrl:this.state.imageUrl,
    //     }
    //     console.log(artikel)
    //     axios({
    //     method : 'POST',
    //     url : 'https://api.legalisirjakarta.com/article',
    //     data: artikel,
    //     headers:{
    //         'Content-Type' : 'multipart/form-data'
    //     }
    //     })
    //     .then( Resp => {
    //         let users = this.state.users
    //         users.push( Resp.data )
    //         this.setState({})
    //     })
    
    // }
    render(){
        
    return (
        <>
        {/* <pre>debug title: { this.state.title } </pre>
            <pre>debug description: { this.state.description} </pre>
            <pre>image url: { this.state.imageUrl } </pre>
            <pre>attend: { this.state.attend } </pre> */}
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
                    <h2 class="fs-2 m-0">Artikel</h2>
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
            onSubmit={this.handleSubmit}
            >
            <Form.Group  className="mb-3 mb-sm-5 px-sm-5" >
                    <Row>
                    <Form.Label className='col-sm-2 col-form-label col-12 artikel__adm__text'>Gambar</Form.Label>
                    <Form.Control className='col-sm-10 col-12 artikel__adm__text2 artikel__file' type="file"  aria-describedby="inputGroupFileAddon03" aria-label="Upload" id="image" name="image" 
                     accept="image/png, image/jpeg"  onChange={this.handleImageChange} required
                    ></Form.Control>
                    </Row>
                </Form.Group>
                <Form.Group  className="mb-3 px-sm-5" controlId="exampleForm.ControlInput1">
                    <Row>
                    <Form.Label className='col-sm-2 col-form-label col-12 artikel__adm__text'>Judul</Form.Label>
                    {/* <Form.Control className='col-sm-10 col-12 artikel__adm__text2' type="text" placeholder="Masukkan judul artikel" id="title" name="title"
                    value={this.state.title} onChange={this.handleChange} 
                        
                    /> */}
                    <Form.Control className='col-sm-10 col-12 artikel__adm__text2' placeholder='Masukkan Deskripsi artikel'name="title" id="title"
                    value={this.state.title} onChange={this.handleChange} required
                     as="textarea" rows={6} />
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 px-sm-5" controlId="exampleForm.ControlTextarea1">
                    <Row>
                    <Form.Label className='col-sm-2 col-form-label artikel__adm__text'>Deskripsi</Form.Label>
                    <Form.Control className='col-sm-10 col-12 artikel__adm__text2' placeholder='Masukkan Deskripsi artikel'name="description" id="description"
                    value={this.state.description} onChange={this.handleChange} required
                     as="textarea" rows={6} />
                    </Row>
                </Form.Group>
                <Button variant="info" type="submit" name="submit" onClick={(e)=>this.handleUpload(e)}>Submit</Button>
            </Form>
            
                
            
        </div>
    </div>
    </>
    )
    }
}
export default Artikel;
