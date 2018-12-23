import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {updateMortgage, updateRent, clearInputs} from '../../../ducks/reducer'


class StepThree extends Component{
  constructor(props){
    super(props);

    this.state = {
      mortgage: '',
      rent: ''
    }
  }

  // handleChange(prop, val){
  //   this.setState({
  //     [prop]: val
  //   })
  // }

  addHouse = () => {
    // console.log(this.props)
    // console.log(this.state)
    const {name, address, city, state, zip, img, mortgage, rent} = this.props
    // const {mortgage, rent} = this.state
    axios.post(`/api/houses`, {name, address, city, state, zip, img, mortgage, rent} ).then(
      this.props.clearInputs
    )
  }

  handleClick =() => {
    this.addHouse()
    // this.resetState()
  }

  // resetState = () => {
  //   this.setState({
  //     name: '',
  //     address: '',
  //     city: '',
  //     state: '',
  //     zip: ''
  //   })
  // }


  render(){
    console.log(this.props)
    const {mortgage, rent, updateMortgage, updateRent} = this.props;
    return(
      <div> 
        <h1> Step Three </h1>
        <input onChange={(e)=> updateMortgage(e.target.value)}
        placeholder='400,000'
        value={mortgage}
        type="text"/>
          <input onChange={(e)=>  updateRent(e.target.value)}
        placeholder='1500'
        value={rent}
        type="text"/>

        <Link to='/wizard/step2'><button> Previous Step </button></Link>
        <Link to='/'><button onClick={this.handleClick}>Complete</button></Link>
        
        
        </div>
    )
  }
}

function mapStateToProps(reduxState){
 const{ name, address, city, state, zip, img, mortgage, rent} = reduxState;
 return{
   name,
   address,
   city,
   state,
   zip,
   img,
   mortgage,
   rent
 }
}

let outputActions = {
  updateMortgage,
  updateRent,
  clearInputs
}

export default connect(mapStateToProps, outputActions) (StepThree);