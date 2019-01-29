import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

class Booking extends Component {
  state = {
    first_name: '',
    fnError: false,
    last_name: '',
    lnError: false,
    flight_number: 'A174E',
    bags: 2,
    details: {},
    success: null,
    message: '',
  }

  componentDidMount = () => this.setState({ details: this.props.history.location.state })

  bookFlight = (e) => {
    const { first_name, last_name } = this.state
    e.preventDefault()
    if (first_name.length !== 0 && last_name.length !== 0) {
      axios.post('/book', { first_name, last_name }).then((res) => {
        console.log(res.data)
        if (res.data.success !== false) {
          this.setState({ success: res.data.success, confirmation: res.data.confirmation })
        } else {
          this.setState({ success: res.data.success, message: res.data.message })
        }
      })
    } else {
      this.setState({ fnError: true, lnError: true }, () => setTimeout(() => this.setState({ fnError: false, lnError: false }), 2500))
    }
  }

  handleInputs = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    })
  }

  clearInputs = () => {
    const form = document.forms[0]
    this.setState({
      first_name: 'John',
      fnError: false,
      last_name: 'Doe',
      lnError: false,
      flight_number: 'A174E',
      bags: 2,
      success: null,
      message: '',
      confirmation: '',
    })
    form.reset()
  }

  render() {
    const { flight_number, fnError, lnError, message, success, confirmation } = this.state
    const { number, arrives, departs, cost, airline } = this.state.details

    return (
      <>
        <div className="box">
          <div className="content">
            <h1>Flight #{number}</h1>
            <h5>Booking Details</h5>
            <p>{airline}</p>
            {arrives && departs && (
              <p>
                <span>{(arrives || {}).airport}</span> ➡ <span>{(departs || {}).airport}</span>
              </p>
            )}
            {departs && (
              <p>
                Departs ✈ <br />
                <span>
                  <Moment format="MMMM Do YYYY, h:mm:ss a">{(departs || {}).when}</Moment>
                </span>
              </p>
            )}
            {arrives && (
              <p>
                Arrives ✈ <br />
                <span>
                  <Moment format="MMMM Do YYYY, h:mm:ss a">{(arrives || {}).when}</Moment>
                </span>
              </p>
            )}
            <h5>Total price</h5>
            <p>${cost}</p>
          </div>
        </div>
        {success !== false && (
          <div className="notification is-success">
            <p>You have successfully booked this flight, Here is your confirmation code: {confirmation}</p>
          </div>
        )}
        {success === false && (
          <div className="notification is-danger">
            <p>{message}</p>
          </div>
        )}
        <br />
        <form onSubmit={this.bookFlight}>
          <div className="field">
            <label className="label">First name</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={this.handleInputs} className="input is-medium" name="first_name" type="text" placeholder={'John'} />
              {fnError === true && <p className="is-danger">First Name is required</p>}
            </div>
          </div>
          <div className="field">
            <label className="label">Last name</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={this.handleInputs} className="input is-medium" name="last_name" type="text" placeholder={'Doe'} />
              {lnError === true && <p className="is-danger">Last Name is required</p>}
            </div>
          </div>
          <div className="field">
            <label className="label">Flight Number</label>
            <div className="control has-icons-left has-icons-right">
              <input onChange={this.handleInputs} className="input is-medium" name="flight_number" type="text" placeholder={flight_number} />
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
              <Link to="/" className="button is-danger">
                Cancel
              </Link>
            </div>
          </div>
        </form>
        <br />
      </>
    )
  }
}

export default Booking
