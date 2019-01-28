import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

import { Table, Button } from 'semantic-ui-react'

const Flight = ({ info }) => (
  <Table.Row verticalAlign="top">
    <Table.Cell>{`$ ${info.cost}`}</Table.Cell>
    <Table.Cell>
      <span>{info.departs.airport} ✈</span> <Moment format="LT">{info.departs.when}</Moment>
    </Table.Cell>
    <Table.Cell>{getHourDifference(info.departs.when, info.arrives.when)}</Table.Cell>
    <Table.Cell>
      <span>{info.arrives.airport} ✈</span> <Moment format="LT">{info.arrives.when}</Moment>
    </Table.Cell>
    <Table.Cell>{info.airline}</Table.Cell>
    <Table.Cell>{info.number}</Table.Cell>
    <Button primary>
      <Link to="/book">Book</Link>
    </Button>
  </Table.Row>
)

function getHourDifference(date1, date2) {
  const d1 = new Date(date1.toString()).getHours()
  const d2 = new Date(date2.toString()).getHours()

  return `${Number(Math.abs(d1 - d2))}h`
}

export default Flight
