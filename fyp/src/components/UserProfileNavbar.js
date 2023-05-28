import React from 'react';
import { NavLink } from 'react-router-dom';
import reddrop from "../images/reddrop.png";


const UserProfileNavbar = () => {
  const logouthandler = ()=>{
    localStorage.clear();
  }
  return (
  
       <nav className="usernavbar">
      <div className="logo-container">
        <img src={reddrop} alt="Logo" className="logo" />
      </div>
      <ul className="usernav-links">
        <li>
          <NavLink className="usernav-link" to="/userprofile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className="usernav-link" to="/signin" onClick={logouthandler}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default UserProfileNavbar;