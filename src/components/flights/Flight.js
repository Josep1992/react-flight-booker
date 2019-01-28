import React from 'react'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const Flight = ({ info }) => (
  <tr>
    <td>{`$ ${info.cost}`}</td>
    <td>
      <span>{info.departs.airport} ✈</span> <Moment format="LT">{info.departs.when}</Moment>
    </td>
    <td>{getHourDifference(info.departs.when, info.arrives.when)}</td>
    <td>
      <span>{info.arrives.airport} ✈</span> <Moment format="LT">{info.arrives.when}</Moment>
    </td>
    <td>{info.airline}</td>
    <td>{info.number}</td>
    <Link to={{ pathname: '/book', state: { ...info } }}>Book</Link>
  </tr>
)

function getHourDifference(date1, date2) {
  const d1 = new Date(date1.toString()).getHours()
  const d2 = new Date(date2.toString()).getHours()

  return `${Number(Math.abs(d1 - d2))}h`
}

export default Flight
