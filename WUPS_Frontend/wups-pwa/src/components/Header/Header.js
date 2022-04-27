import '../../App.css';
import { NavLink } from 'react-router-dom';
import { Dropdown } from './Dropdown';
import Logo from './Logo';
import UserID from './UserID';
import DateRange from './DateRange';


function Nav() {
  return (
    <header>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      {/* This is WUPS IOT overview */}

      <UserID />
      <DateRange />
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
