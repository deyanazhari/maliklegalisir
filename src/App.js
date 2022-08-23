import React from "react";
import Home from './Home.jsx';
import Login from './Components/login/login.jsx'
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;