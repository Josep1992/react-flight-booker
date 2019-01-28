import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Booking extends Component {
  state = {
    first_name: 'John',
    last_name: 'Doe',
    flight_number: 'A174E',
    bags: 2,
    details: {},
    success: false,
    message: '',
  }

  componentDidMount = () => {
    console.log(this.props.history.location.state)
    this.setState({ details: this.props.history.location.state })
  }

  bookFlight = (e) => {
    const { first_name, last_name } = this.state
    e.preventDefault()
    if (first_name.length !== 0 && last_name.length !== 0) {
      axios.post('/book', { first_name, last_name }).then((res) => console.log(res))
    }
  }

  handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    const { details, first_name, last_name, flight_number } = this.state
    return (
      <>
        <h1>Booking Flight #{details.number}</h1>
        <Link to="/" className="button">
          Back to Flights
        </Link>
        <div className="flight-details" />
        <br />
        <form onSubmit={this.bookFlight}>
          <div className="field">
            <label className="label">First name</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={this.handleInputs} className="input is-success" name="first_name" type="text" placeholder={first_name} />
            </div>
          </div>
          <div className="field">
            <label className="label">Last name</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={this.handleInputs} className="input is-success" name="last_name" type="text" placeholder={last_name} />
            </div>
          </div>
          <div className="field">
            <label className="label">Flight Number</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={this.handleInputs} className="input is-success" name="flight_number" type="text" placeholder={flight_number} />
            </div>
          </div>
          <div className="field">
            <label className="label">Bags</label>
            <div className="control">
              <div className="select">
                <select onChange={this.handleInputs} name="bags">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Book
              </button>
            </div>
          </div>
        </form>
        <br />
      </>
    )
  }
}

export default Booking
