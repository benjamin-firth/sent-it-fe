import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [ climbs, setClimbs ] = useState([]);

  const saveClimb = climb => {
    const newClimb = {
      id: Math.random(), 
      name: climb.name,
    };
    setClimbs([...climbs, newClimb ]);
  };

  return (
    <AppContext.Provider value={{ climbs, saveClimb }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;