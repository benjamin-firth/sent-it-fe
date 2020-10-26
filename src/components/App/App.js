import React, { useState } from 'react';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import ClimbContainer from '../ClimbContainer/ClimbContainer';
import ClimbForm from '../ClimbForm/ClimbForm';
import './App.css';

const App = () => {
  const [ isLoggedIn, setLoggedIn ] = useState(false);

  const login = () => {
    setLoggedIn(!isLoggedIn);
  }

  return (
    <main>
      {
        !isLoggedIn ?
        <Welcome login={login} /> :
        <>
          <Header />
          <ClimbForm />
          <ClimbContainer />
        </>
      }
    </main>
  );
}

export default App;
