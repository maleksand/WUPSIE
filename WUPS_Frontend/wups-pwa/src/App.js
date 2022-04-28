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
export const setCurrentUserContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetchApi.getUserHouseholdsDevices(currentUser, "2019-09-01", "2020-3-01")
      setData(processData(response))
    }
    getData()
  }, [currentUser])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  const changeCurrentUser = useCallback((userId) => {
    setCurrentUser(userId)
  }, [])

  return (
    <div className="App">
      <Router>
        <setCurrentUserContext.Provider value={changeCurrentUser}>
          <Header setCurrentUser={changeCurrentUser} />
        </setCurrentUserContext.Provider>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
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
      {props.data.length ? <Overview/> : <h1> Loading ...</h1>}
    </DataContext.Provider>
  )
}


export default App;
