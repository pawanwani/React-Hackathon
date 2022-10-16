import './App.css';
import {Upload} from './Components/Upload/Upload';
import Navbar from './Components/Navbar/nav';
import Resultscreen from './Components/ResultScreen/Resultscreen';
import UserDetails from './Components/UserDetails/UserDetails'
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import {useSelector} from 'react-redux'


function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Upload/>}/>
          <Route exact path='/result' element={<Resultscreen/>} />
          <Route path= '/userdetail' element={<UserDetails/>} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
