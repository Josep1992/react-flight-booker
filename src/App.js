import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/layout/Header'
import Flights from './components/flights/Flights'
import Booking from './components/flights/Booking'

class App extends Component {
  state = {
    flights: [],
    error: '',
  }

  componentDidMount = async () => {
    try {
      const requestFlights = await axios.get('/flights')
      const flightRecords = await requestFlights
      this.setState({ flights: flightRecords.data.flights })
    } catch (err) {
      this.setState({ error: err }) && console.error(err)
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Header tagline={'FlightScanner'} />
                  <Flights flights={this.state.flights} />
                </>
              )}
            />
            <Route path="/book" component={Booking} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
