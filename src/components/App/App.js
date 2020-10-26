import React, { useState } from 'react';
import AppProvider from '../AppContext/AppContext';
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
    <AppProvider>
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
    </AppProvider>
  );
}

export default App;
