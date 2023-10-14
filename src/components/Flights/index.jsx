import React from 'react'; 
import Pagination from '../Pagination/index'; 
 
const Flights = ({ flights }) => { 
  const [currentPage, setCurrentPage] = React.useState(1); 
  const itemsPerPage = 5; 
 
  const startIndex = (currentPage - 1) * itemsPerPage; 
  const endIndex = startIndex + itemsPerPage; 
  const currentFlights = flights.slice(startIndex, endIndex); 
 
  return ( 
    <div className='flight-list'> 
      <Pagination 
        totalItems={flights.length} 
        itemsPerPage={itemsPerPage} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      /> 
      {currentFlights && currentFlights.map( 
        (flight) => flight?.segments?.map( 
          (segment, index) => ( 
            <div className='contentCardFlight' key={index}> 
              <div className='cardSearch'> 
                <p> 
                  <strong>CIUDAD DE SALIDA: </strong>{' '} 
                  {segment?.location[0]?.locationId}{' '} 
                </p> 
                <p> 
                  <strong>FECHA DE SALIDA: </strong>{' '} 
                  {segment?.productDateTime?.dateOfDeparture} 
                </p> 
                <p> 
                  <strong>HORA DE SALIDA: </strong>{' '} 
                  {segment?.productDateTime?.timeOfDeparture} 
                </p> 
              </div> 
              <div className='cardLine'> 
                <img 
                  src={`https://pics.avs.io/90/90/${segment?.companyId?.marketingCarrier}.png`} 
                  alt={segment?.carrier} 
                /> 
              </div> 
              <div className='cardSearch'> 
                <p> 
                  <strong>AEROLÍNEA: </strong>{' '} 
                  {segment?.companyId?.marketingCarrier} 
                </p> 
 
                <p> 
                  <strong>NÚMERO DE VUELO: </strong>{' '} 
                  {segment?.flightOrtrainNumber} 
                </p> 
              </div> 
              <div className='cardLine'> 
                <img 
                  src={`https://pics.avs.io/90/90/${segment?.companyId.marketingCarrier}.png`} 
                  alt={segment?.carrier} 
                /> 
              </div> 
              <div className='cardSearch'> 
                <p> 
                  <strong>CIUDAD DE LLEGADA: </strong>{' '} 
                  {segment?.location[1]?.locationId} 
                </p> 
                <p> 
                  <strong>FECHA DE LLEGADA: </strong>{' '} 
                  {segment?.productDateTime?.dateOfArrival} 
                </p> 
                <p> 
                  <strong>HORA DE LLEGADA: </strong>{' '} 
                  {segment?.productDateTime?.timeOfArrival} 
                </p> 
              </div> 
            </div> 
          ) 
        ) 
      )} 
 
      <Pagination 
        totalItems={flights.length} 
        itemsPerPage={itemsPerPage} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      /> 
    </div> 
  ); 
}; 
 
export default Flights;