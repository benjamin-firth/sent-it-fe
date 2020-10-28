import React, { useState } from 'react';
import AppProvider from '../AppContext/AppContext';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import LowerMain from '../LowerMain/LowerMain';
import styled from 'styled-components';
import './App.css';

const App = () => {
  const [ isLoggedIn, setLoggedIn ] = useState(false);

  const login = () => {
    setLoggedIn(!isLoggedIn);
  }

  return (
    <AppProvider>
      <StyledMain>
        {
          !isLoggedIn ?
          <Welcome login={login} /> :
          <>
            <Header />
            <LowerMain />
          </>
        }
      </StyledMain>
    </AppProvider>
  );
}

const StyledMain = styled.section`
  * {
    margin: 0;
    padding: 0;
  }

  width: 100vw;
  height: 100vh;
`;

export default App;
