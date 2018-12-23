import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../../ducks/reducer'


class StepOne extends Component {
  constructor(props) {
    super(props);

      this.state = {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
      }
  }

  // handleChange(prop, val) {
  //   this.setState({
  //     [prop]: val
  //   })
  // }



  render() {
    const { name, address, city, state, zip, updateName, updateAddress, updateCity, updateState, updateZip  } = this.props;
    console.log(this.props)

    return (
      <div>
        <input onChange={(e) => updateName(e.target.value)}
          placeholder='name'
          value={name}
          type="text" />
        <input onChange={(e) => updateAddress(e.target.value)}
          placeholder='address'
          value={address}
          type="text" />
        <input onChange={(e) => updateCity(e.target.value)}
          placeholder='city'
          value={city}
          type="text" />
        <input onChange={(e) => updateState(e.target.value)}
          placeholder='state'
          value={state}
          type="text" />
        <input onChange={(e) => updateZip(e.target.value)}
          placeholder='zipcode'
          value={zip}
          type="text" />

        <Link to='/wizard/step2'><button> Next Step </button></Link>
      </div>
    )
  }
}


function mapStateToProps(reduxState) {
  const { name, address, city, state, zip } = reduxState;
  return {
    name,
    address,
    city,
    state,
    zip
  }
}

  let outputActions = {
    updateName,
    updateAddress,
    updateCity,
    updateState,
    updateZip
  }

  export default connect(mapStateToProps, outputActions)(StepOne);