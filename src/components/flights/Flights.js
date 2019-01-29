import React from 'react'
import Flight from './Flight'

const Flights = ({ flights }) => (
  <table className="table">
    <thead>
      <tr>
        <th>
          <abbr title="Price">Price</abbr>
        </th>
        <th>
          <abbr title="Departure">Departure</abbr>
        </th>
        <th>
          <abbr title="Time">Time</abbr>
        </th>
        <th>
          <abbr title="Arrival">Arrival</abbr>
        </th>
        <th>
          <abbr title="Airline">Airline</abbr>
        </th>
        <th>
          <abbr title="Number">Number</abbr>
        </th>
        <th>
          <abbr title="Booking">Booking</abbr>
        </th>
      </tr>
    </thead>
    <tbody>{flights.length !== 0 && flights.map((flight) => <Flight key={flight.number} info={flight} />)}</tbody>
  </table>
)

export default Flights
