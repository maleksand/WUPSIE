import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Profile from './Components/Profile';
import Beers from './Components/Beers';
import BeerDetails from './Components/BeerDetails';
import Flex from './Components/Flex'
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/beers' element={<Beers />} />
          <Route path="/beer/:id"element={<BeerDetails/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1><Flex/></h1>
  </div>
  
)

export default App;
