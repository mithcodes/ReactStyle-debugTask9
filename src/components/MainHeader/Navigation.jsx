
import React from 'react';
import classes from './Navigation.module.css';
import { useAuth } from '../../AuthContext'; // Adjust the import path

const Navigation = () => {
  const authContext = useAuth();

  return (
    <nav className={classes.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <button onClick={authContext.logout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
