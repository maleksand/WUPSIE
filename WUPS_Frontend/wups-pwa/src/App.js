import { useState, useEffect, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import About from './components/About';
import Overview from './components/Overview';
import processData from "./logic/processDataToSumStructure"
import fetchApi from './logic/FetchAPI';
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
      // const response = await fetch("http://localhost:3030/api/households/01C21CA24FBCECE7/devices/measurements?startDate=2019-06-01&endDate=2020-06-01")
      const response = await fetchApi.getHouseholdFromDateRange("01C21CA24FBCECE7", "2019-06-01", "2020-06-01" )
      const theData = processData(response)
      setData(theData)
      console.log(data)
    }
    getData()
  }, [])

  return (
    <DataContext.Provider value={data}>
      {data.length ? <Overview/> : <h1> Loading ...</h1>}
    </DataContext.Provider>
  )
}


export default App;
