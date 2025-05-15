
import "./style.css"
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react'; 
import React from 'react';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
      <div className="nav">
        <div className="conteiner">
          <div className="nav-bar">
            <div className="nav-bar-left">
              <NavLink to="/"><span>Lem</span></NavLink>
              <NavLink to="/">Главная</NavLink>
              <NavLink to="https://github.com/KuromiVoid1007" target="_blank">Git</NavLink>
              <NavLink to="/news">Новости</NavLink>
            </div>

            <div className="nav-bar-right">
              {user && (
                <span >{user.login}</span>
              )}
              <NavLink to={user ? "/profile" : "/login"}>
                <Icon className="profile-icon" icon="material-symbols:account-circle" style={{ color: "#323232", fontSize: "28px" }} />
              </NavLink>
              
            </div>
          </div>
        </div>
      </div>
  );
}

export default NavBar;
