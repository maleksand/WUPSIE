import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import About from './components/About';
import Overview from './components/Overview';
import SumPrice from './Logic/SumPrice';
import FetchAPI from './components/FetchData/FetchAPI';


function App() {

  
  // //For testing purpose of SumPrice. Can be removed when it has been throug peer review
  const [data, setData] = useState([]);
  
  useEffect(() => {
        
    async function getData() {
        let json = await FetchAPI()
        // console.log(json)
        setData(json)
    }

    getData()
 
}, [])
  async function getSumPrice() {
    console.log(await SumPrice(data, '1'))
  }
  getSumPrice()
// Testing purpose done 


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
