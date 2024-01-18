// MainHeader.js
import React from 'react';
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import { useAuth } from '../../AuthContext'; // Adjust the import path

const MainHeader = () => {
  const authContext = useAuth();

  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={authContext.isLoggedIn} onLogout={authContext.logout} />
    </header>
  );
};

export default MainHeader;
