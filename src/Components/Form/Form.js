import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props){
      super()
      this.state = {
          name: '',
          date: '',
          time: '',
          number: ''
      }
  }

  handleChange = (target) => {
    this.setState({ [target.name]: target.value },)
  }

  handleClick = ({ handleSubmit }) => {
    handleSubmit(this.state)
  }

  render() {
    return (<form>
      <label htmlFor="name" className="hidden"></label>
        <input name='name' value={this.state.name} onChange={(event) => this.handleChange(event.target)} placeholder="Name" type='text' />
      <label htmlFor="date" className="hidden"></label>
        <input name='date' value={this.state.date} onChange={(event) => this.handleChange(event.target)} placeholder="Date(mm/dd)" type='text' />
      <label htmlFor="time" className="hidden"></label>
        <input name='time' value={this.state.time} onChange={(event) => this.handleChange(event.target)} placeholder="Time" type='text' />
      <label htmlFor='number' className="hidden"></label>
        <input name='number' value={this.state.number} onChange={(event) => this.handleChange(event.target)} placeholder="Number of guests" type='number' />
      <button className='submit-button' type='submit' onClick={this.handleClick}>Make Reservation</button> 
    </form>)
  }
}

  export default Form