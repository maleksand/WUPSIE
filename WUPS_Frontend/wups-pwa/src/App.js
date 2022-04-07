import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import About from './components/About';
import Overview from './components/Overview';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Route path='/beers' element={<Beers />} /> */}
          {/* <Route path="/beer/:id"element={<BeerDetails/>} /> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    {/* <h1>Under construction</h1> */}
    <Overview />
  </div>
)

export default App;
