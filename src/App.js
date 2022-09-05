import React from "react";
import Home from './Home.jsx';
import Login from './Components/login/login.jsx'
import Layanan from './Components/layanan/Layanan.jsx';
import Artikel from './Components/Artikel/Artikel.jsx';
import TentangKami from './Components/About/About.jsx';
import Admin from './Components/Admin/Admin.jsx';
import Artikeladmin from './Components/Admin/artikel/Artikel.jsx';
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
        <Route path ="/Admin" element ={<Admin/>}/>
        <Route path ="/Admin/Artikel" element ={<Artikeladmin/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;