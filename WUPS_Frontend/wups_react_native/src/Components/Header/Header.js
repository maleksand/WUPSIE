import '../../App.css';
import { Link } from 'react-router-dom';
import { Text } from 'react-native';
import { Dropdown } from './Dropdown';




function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3>Logo</h3>
      </Link>
      <Text>This is WUPS IOT overview</Text>
      {/* Add a dropdown here */}

      <Dropdown>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/profile'>
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to='/beers'>
          <li>Beers(ForTestApi)</li>
        </Link>
      </Dropdown>

    </nav>
  );
}

export default Nav;
