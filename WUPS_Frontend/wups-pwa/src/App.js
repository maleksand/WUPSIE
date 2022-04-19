import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import About from './components/About';
import Overview from './components/Overview';
import processData from "./Logic/processDataToSumStructure"

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3030/api/households/01C21CA24FBCECE7/devices/measurements?startDate=2019-02-01&endDate=2019-08-01")
      const jsonData = await response.json()
      setData(processData(jsonData))
    }
    getData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])



  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/profile' element={<Profile />} /> */}
          {/* <Route path='/beers' element={<Beers />} /> */}
          {/* <Route path="/beer/:id"element={<BeerDetails/>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <Overview />
  </div>
)


export default App;
