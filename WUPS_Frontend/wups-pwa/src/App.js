import { useState, useEffect, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import About from './components/About';
import Overview from './components/Overview';
import processData from "./logic/processDataToSumStructure"

export const DataContext = createContext()

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3030/api/households/01C21CA24FBCECE7/devices/measurements?startDate=2019-06-01&endDate=2020-06-01`)
      const json = await response.json()
      setData(processData(json))
    }
    getData()
  }, [])

  return (
    <DataContext.Provider value={data}>
      <Overview />
    </DataContext.Provider>
  )
}


export default App;
