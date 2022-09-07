import React from "react";
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
  Route, Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/Login" element={<Login/>}/>
        <Route path ="/Layanan" element={<Layanan/>}/>
        <Route path ="/Artikel" element ={<Artikel/>}/>
        <Route path ="/Coba" element ={<Test/>}/>
        <Route path ="/TentangKami" element ={<TentangKami/>}/>
        <Route path ="/DetailArtikel/:id" element ={<DetailArtikel/>}/>

        <Route path ="/Admin" element ={<Admin/>}/>
        <Route path ="/Admin/Artikel" element ={<Artikeladmin/>}/>
        <Route path ="/Admin/EditArtikel" element ={<EditArtikel/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;