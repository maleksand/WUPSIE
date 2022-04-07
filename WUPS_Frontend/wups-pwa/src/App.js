import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <p>hello</p>
      <Router>
        <Header />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/beers' element={<Beers />} />
          <Route path="/beer/:id"element={<BeerDetails/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
