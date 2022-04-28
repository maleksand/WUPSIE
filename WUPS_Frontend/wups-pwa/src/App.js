import { useState, useEffect, createContext, useCallback } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import About from './components/About';
import Overview from './components/Overview';
import processData from "./logic/processDataToSumStructure"
import fetchApi from './logic/FetchAPI';
export const DataContext = createContext()
export const setAppStateContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(1)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await fetchApi.getUserHouseholdsDevices(currentUser, "2019-09-01", "2020-3-01")
      setData(processData(response))
      setIsLoading(false)
    }
    getData()
  }, [currentUser])

  function changeCurrentUser(userId) {
    setCurrentUser(userId)
  }

  function changeIsLoading(bool) {
    setIsLoading(bool)
  }

  return (
    <div className="App">
      <Router>
        <setAppStateContext.Provider value={{ setCurrentUser: changeCurrentUser, setIsloading: changeIsLoading }}>
          <Header />
        </setAppStateContext.Provider>
        <Routes>
          <Route path='/' element={<Home data={data} isLoading={isLoading} />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home(props) {
  return (
    <DataContext.Provider value={props.data}>
      {props.isLoading ? <h1> Loading ...</h1> : <Overview />}
    </DataContext.Provider>
  )
}


export default App;
