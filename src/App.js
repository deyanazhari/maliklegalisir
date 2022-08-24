import React from "react";
import Home from './Home.jsx';
import Login from './Components/login/login.jsx'
import Layanan from './Components/layanan/Layanan.jsx';
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
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/layanan" element={<Layanan/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;