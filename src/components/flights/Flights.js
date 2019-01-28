import React from 'react'
import { Table } from 'semantic-ui-react'
import Flight from './Flight'

const Flights = ({ flights }) => (
  <Table selectable>
    <>
      <Table.Header>
        <Table.Row verticalAlign="top">
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Departure</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Arrival</Table.HeaderCell>
          <Table.HeaderCell>Airline</Table.HeaderCell>
          <Table.HeaderCell>Number</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{flights.length !== 0 && flights.map((flight) => <Flight key={flight.number} info={flight} />)}</Table.Body>
    </>
  </Table>
)

export default Flights
