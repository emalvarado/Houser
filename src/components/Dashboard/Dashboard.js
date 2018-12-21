import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      houses: []
    }
  }

  componentDidMount(){
    this.getHouses()
  }

  getHouses = () => {
    axios.get(`/api/houses`).then(res => {
      // console.log(res)
      this.setState({
        houses: res.data
      })
    })
  }

  deleteHouse = (id) => {
    axios.delete(`/api/houses/${id}`).then(this.getHouses())
  }

  render(){
    let housesToDisplay = this.state.houses.map((house, i)=> (
      <House key={i}
      id={house.id}
      name={house.name}
      address={house.address}
      city={house.city}
      state={house.state}
      zip={house.zip}
      deleteHouse={this.deleteHouse}/>
    ))
    return(
      <div> Dashdash 
        <Link to='/wizard'><button>Add New Property</button></Link> 
        {housesToDisplay}
      </div>
    )
  }
}

export default Dashboard