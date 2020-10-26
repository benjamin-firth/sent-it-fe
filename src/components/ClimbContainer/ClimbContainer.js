import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';
import ClimbCard from '../ClimbCard/ClimbCard';

const ClimbContainer = () => {
  const { climbs } = useContext(AppContext);

  return (
    <section>
      { climbs.map(climb => (
        <ClimbCard key={climb.id} name={climb.name} />
      )) }
    </section>
  )
}

export default ClimbContainer;