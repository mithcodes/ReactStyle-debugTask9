
import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useAuth } from '../../AuthContext'; // Adjust the import path

const Login = () => {
  const authContext = useAuth();

  const submitHandler = (event) => {
    event.preventDefault();
    // Dummy authentication logic; replace with actual authentication check
    authContext.login();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* Existing login form code */}
      </form>
    </Card>
  );
};

export default Login;
