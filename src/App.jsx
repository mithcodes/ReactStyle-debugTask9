
import React from 'react';
import { AuthContextProvider } from '../components/Store/AuthContext';
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';

function App() {
  return (
    <AuthContextProvider>
      <MainHeader />
      <main>
        <Login />
      </main>
    </AuthContextProvider>
  );
}

export default App;
