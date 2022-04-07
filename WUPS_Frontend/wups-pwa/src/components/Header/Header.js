import '../../App.css';
import { NavLink } from 'react-router-dom';
import { Dropdown } from './Dropdown';



function Nav() {
  return (
    <header>
      <NavLink to='/'>
        <h3>Logo</h3>
      </NavLink>
      This is WUPS IOT overview
      {/* Add a dropdown here */}

      <Dropdown>
        <NavLink to='/about'>
            About
        </NavLink>
        <NavLink to='/'>
            Overview
        </NavLink>
      </Dropdown>

    </header>
  );
}

export default Nav;
