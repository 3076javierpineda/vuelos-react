import { useCallback, useState } from 'react';

export const useAirportForCityList = () => {
  const [airport, setAirport] = useState([]);

  const fetchAirports = useCallback(async (city) => {
    const data = await fetch(
      `https://travelflight.pdtcomunicaciones.com/api/airports?code=${city}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      }
    );
    const response = await data.json();
    if (response.length > 0) {
      setAirport(response);
    }
  }, []);
  return [airport, fetchAirports];
};

export const useFlightList = () => {
  const [flights, setFlight] = useState([]);

  const fetchFlight = useCallback(async (params) => {
    const data = await fetch(
      `https://travelflight.pdtcomunicaciones.com/api/flights`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(params),
      }
    );

    const response = await data.json();
    if (response?.data?.Seg1?.length > 0) {
      setFlight(response?.data?.Seg1);
    }
  }, []);
  return [flights, fetchFlight];
};
