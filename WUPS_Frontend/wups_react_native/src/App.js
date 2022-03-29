import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Profile from './Components/Profile';
import Beers from './Components/Beers';
import BeerDetails from './Components/BeerDetails';
import Flex from './Components/Flex'
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {View, Text} from 'react-native';


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
    <Text><Flex/></Text>
  </View>
  
)

export default App;
