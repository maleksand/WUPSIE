import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Profile from './Components/Profile';
import Beers from './Components/Beers';
import BeerDetails from './Components/BeerDetails';
//import FlexBackground from './Components/FlexBackground';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {View} from 'react-native';
import Overview from './Components/Overview';


function App() {
  return (
    <Router>
      <View className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/beers' element={<Beers />} />
          <Route path="/beer/:id"element={<BeerDetails/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </View>
    </Router>
  );
}

const Home = () => (
  <View>
    {/* <View>
      <FlexBackground> */}
        <View>
          <Overview />
        </View>
      {/* </FlexBackground>
    </View> */}
  </View>
  
)

export default App;
