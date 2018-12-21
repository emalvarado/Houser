import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Wizard extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
  }

  handleChange(prop, val){
    this.setState({
      [prop]: val
    })
  }

  addHouse = () => {
    const {name, address, city, state, zip} = this.state
    axios.post(`/api/houses`, {name, address, city, state, zip} ).then(
      console.log(`i've changed`)
    )
  }

  handleClick =() => {
    this.addHouse()
    this.resetState()
  }

  resetState = () => {
    this.setState({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  render(){
    const {name, address, city, state, zip} = this.state;
    return(
      <div> 
        <h1>Wizzing Wizzbies</h1>
        <input onChange={(e)=> this.handleChange('name', e.target.value)}
        placeholder='name'
        value={name}
        type="text"/>
        <input  onChange={(e)=> this.handleChange('address', e.target.value)}
        placeholder='address'
         value={address}
        type="text"/>
        <input  onChange={(e)=> this.handleChange('city', e.target.value)}
        placeholder='city'
         value={city}
        type="text"/>
        <input  onChange={(e)=> this.handleChange('state', e.target.value)}
        placeholder='state'
         value={state}
        type="text"/>
        <input  onChange={(e)=> this.handleChange('zip', e.target.value)}
        placeholder='zipcode'
         value={zip}
        type="text"/>
      <Link to='/'><button>Cancel</button></Link> 
      <Link to='/'><button onClick={this.handleClick}>Complete</button></Link>
      </div>
    )
  }
}

export default Wizard