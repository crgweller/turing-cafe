import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../../ApiCalls';
import AllResys from '../AllResys/AllResys';


class App extends Component {
  constructor(){
    super()
    this.state = {
      reservations: [],
      error: '',
    }
  }

  componentDidMount(){
    fetchReservations()
    .then(data => {
      return this.setState({
        reservations: data
      })
    })
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <AllResys reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
