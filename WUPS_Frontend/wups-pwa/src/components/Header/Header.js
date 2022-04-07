import '../../App.css';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';




function Nav() {
  const navStyle = {
    color: 'black'
  };
  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3>Logo</h3>
      </Link>
      This is WUPS IOT overview
      {/* Add a dropdown here */}

      <Dropdown>
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/'>
          <li>Overview</li>
        </Link>
        

        {/* <Link style={navStyle} to='/profile'>
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to='/beers'>
          <li>Beers(ForTestApi)</li>
        </Link> */}
      </Dropdown>

    </nav>
  );
}

export default Nav;
