import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import About from './components/About';
import Overview from './components/Overview';
import processData from "./logic/processDataToSumStructure"

function App() {

  /*
   * Review start:
   * Delete this before merge with main
   */
  const [data, setData] = useState({})

  useEffect(() => {
    async function getData() {
      let e = new Date("2019-01-19 00:00")
      e.setHours(e.getHours() + e.getTimezoneOffset() / 60)
      let ee = new Date("2019-02-19 00:00")
      ee.setHours(ee.getHours() + ee.getTimezoneOffset() / 60)

      const response = await fetch("http://localhost:3030/api/households/01C21CA24FBCECE7/devices/measurements?startDate=" + e.toISOString() + "&endDate=" + ee.toISOString())
      const jsonData = await response.json()
      setData(processData(jsonData))
    }
    getData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])
  /**
   * Review end
   */



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
