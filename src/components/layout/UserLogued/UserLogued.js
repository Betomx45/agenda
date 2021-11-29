import React from 'react';
import './styles.css';

const UserLogued = ({user,onlogout}) => {

    const logout = () => {
        onlogout();
        window.FB.logout(() => {});
    };

    return (
    <nav className="navbar navbar-light bg-light">
        {user.picture &&
          <img
          src={user.picture.data.url} 
          className="userImage"
          alt={user.name}
          />
        }
        <span>{user.name}</span>
        <a className="nav-item nav-link" href="#" onClick={logout}>
            Salir
        </a>
    </nav>
    );
};

export default UserLogued;