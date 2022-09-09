import React, {Component, Fragment} from "react";
import Home from './Home.jsx';
import Login from './Components/login/login.jsx'
import Layanan from './Components/layanan/Layanan.jsx';
import Artikel from './Components/Artikel/Artikel.jsx';
import TentangKami from './Components/About/About.jsx';
import DetailArtikel from './Components/detailArtikel/detailArtikel.jsx'
import Admin from './Components/Admin/Admin.jsx';
import Artikeladmin from './Components/Admin/artikel/Artikel.jsx';
import EditArtikel from './Components/Admin/editArtikel/editArtikel';
import Test from './Components/Coba.jsx'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

class App extends Component {
  render(){
  return (
    <Router>
        <Route exact path ="/" component={Home}/>
        <Route path ="/Login" component={Login}/>
        <Route path ="/Layanan" component={Layanan}/>
        <Route path ="/Artikel" component ={Artikel}/>
        <Route path ="/Coba" component ={Test}/>
        <Route path ="/TentangKami" component ={TentangKami}/>
        <Route path ="/DetailArtikel/:id" component ={DetailArtikel}/>
        <Route path ="/Admin" component ={Admin}/>
        <Route path ="/Admin/Artikel" component ={Artikeladmin}/>
        <Route path ="/Admin/EditArtikel" component ={EditArtikel}/>
        
      
    </Router>
  );
}
}

export default App;