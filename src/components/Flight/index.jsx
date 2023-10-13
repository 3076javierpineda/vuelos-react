import React from 'react';
import Search from '../Search';
import Flights from '../Flights';
import { useFlightList } from '../../hooks/use-api';

const AppFlight = () => {
  const [flights, fetchFlights] = useFlightList();
  return (
    <div className='App'>
      <Search fetchFlights={fetchFlights} />
      <Flights flights={flights} />
    </div>
  );
};

export default AppFlight;
