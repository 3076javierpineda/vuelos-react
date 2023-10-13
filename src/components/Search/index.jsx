import React, { useState } from 'react';
import { useAirportForCityList } from '../../hooks/use-api';

const Search = ({ fetchFlights }) => {
  const [fromAirports, fetchFromAirports] = useAirportForCityList();
  const [toAirports, fetchToAirports] = useAirportForCityList();

  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [fromAirport, setFromAirport] = useState('');
  const [toAirport, setToAirport] = useState('');
  const [fromDateFlight, setFromDateFlight] = useState('');
  const [toDateFlight, setToDateFlight] = useState('');

  const handleAirportFromChange = (e) => {
    setFromCity(e.target.value);
    fetchFromAirports(e.target.value);
  };

  const handleAirportToChange = (e) => {
    setToCity(e.target.value);
    fetchToAirports(e.target.value);
  };

  const handleFromAirport = (value) => {
    setFromAirport(value);
  };

  const handleToAirport = (value) => {
    setToAirport(value);
  };

  const handleFlights = () => {
    fetchFlights({
      searchs: 250,
      qtyPassengers: 1,
      adult: 1,
      itinerary: [
        {
          departureCity: fromAirport,
          arrivalCity: toAirport,
          hour: fromDateFlight,
        },
      ],
    });
  };


  return (
    <>
      <div className='containerGeneral'>
        <div className='containerForm'>
          <div className='headerForm'>
            <h1 className='headerFormTitle'>RESERVA TU VUELO</h1>
          </div>

          <form className='searchForm'>
            <div className='searchFormSelect'>
              <div className='searchFormSelectBorder'>
                <select className='borderFormSelect'>
                  <option value='one-way'>Ida</option>
                  <option value='round-trip'>Ida y Vuelta</option>
                </select>
                <select className='borderFormSelect'>
                  <option value='one-way'>Pasajeros</option>
                </select>
              </div>
            </div>

            <div className='searchFormDestiny'>
              <div>
                <input
                  type='text'
                  className='inputCityOrigin'
                  placeholder='Origen'
                  value={fromCity}
                  onChange={handleAirportFromChange}
                />
                {fromAirports && (
                  <div className='searchFormDestinyList'>
                    {fromAirports.map((airport) => (
                      <p
                        key={airport?.id}
                        className='searchFormDestinyListOption'
                        onClick={() => handleFromAirport(airport?.iata)}
                      >
                        {airport?.name} - {airport?.iata}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <input
                  type='text'
                  className='inputCityDestiny'
                  placeholder='Destino'
                  value={toCity}
                  onChange={handleAirportToChange}
                />
                {toAirports && (
                  <div className='searchFormDestinyList'>
                    {toAirports.map((airport) => (
                      <p
                        key={airport?.id}
                        className='searchFormDestinyListOption'
                        onClick={() => handleToAirport(airport?.iata)}
                      >
                        {airport?.name} - {airport?.iata}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <input
                type='date'
                className='inputFrom'
                value={fromDateFlight}
                onChange={(e) => setFromDateFlight(e.target.value)}
                id='departure'
                name='departure'
              />
              <input
                type='date'
                className='inputTo'
                value={toDateFlight}
                onChange={(e) => setToDateFlight(e.target.value)}
                id='return'
                name='return'
              />
              <button type='button' onClick={handleFlights}>
                Buscar Vuelos
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;