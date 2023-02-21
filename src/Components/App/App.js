import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from '../../ApiCalls';
import AllResys from '../AllResys/AllResys';
import Form from '../Form/Form';


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
      this.setState({
        reservations: data
      })
    })
  }

  handleSubmit = (inputs) => {
    const newRes = {...inputs, id: Date.now()}
    this.setState({ reservations: [...this.state.reservations, newRes ]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <Form handleSubmit={this.handleSubmit}/>
        </div>
          <div className='resy-container'>
            <AllResys reservations={this.state.reservations}/>
          </div>
      </div>
    )
  }
}

export default App;
