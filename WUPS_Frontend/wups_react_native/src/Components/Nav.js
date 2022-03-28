import '../App.css';
import { Link } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white'
  };
  return (
    <nav>
      <Link style={navStyle} to='/'>
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to='/about'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/profile'>
          <li>Profile</li>
        </Link>
        <Link style={navStyle} to='/beers'>
          <li>Beers(ForTestApi)</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
