import '../../App.css';
import { Link } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import Logo from './Logo';



function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3>Logo</h3>

        {/* <Logo /> */}

      </Link>
      This is WUPS IOT Prototype
      {/* Add a dropdown here */}

      <Dropdown>
        <div>
        <Link style={navStyle} to='/about'>
          About
        </Link>
        </div>
        <div>
        <Link style={navStyle} to='/'>
          Overview
        </Link>
        </div>

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
