import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props){
      super(props)
      this.state = {
          name: '',
          date: '',
          time: '',
          number: ''
      }
  }

  handleChange = (event) => {
    console.log('I am typing')
    this.setState({ [event.target.name]: event.target.value },)
  }

  handleClick = (event) => {
    console.log('submit')
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return (<form>
      <label htmlFor="name" className="hidden"></label>
        <input name='name' value={this.state.name} onChange={(event) => this.handleChange(event)} placeholder="Name" type='text' />
      <label htmlFor="date" className="hidden"></label>
        <input name='date' value={this.state.date} onChange={(event) => this.handleChange(event)} placeholder="Date(mm/dd)" type='text' />
      <label htmlFor="time" className="hidden"></label>
        <input name='time' value={this.state.time} onChange={(event) => this.handleChange(event)} placeholder="Time" type='text' />
      <label htmlFor='number' className="hidden"></label>
        <input name='number' value={this.state.number} onChange={(event) => this.handleChange(event)} placeholder="Number of guests" type='number' />
      <button className='submit-button' type='submit' onClick={(event) => this.handleClick(event)}>Make Reservation</button> 
    </form>)
  }
}

  export default Form