import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {updateImage} from '../../../ducks/reducer'

class StepTwo extends Component{
  constructor(props){
    super(props);

    this.state = {
      img: ''
    }
  }

  // handleChange(prop, val){
  //   this.setState({
  //     [prop]: val
  //   })
  // }

  render(){
const {img, updateImage} = this.props;
console.log(this.props)
    return(
      <div>
        {/* <h1> Step Two</h1>  */}
        Image URL:
         <input onChange={(e)=> updateImage(e.target.value)}
        placeholder='image URL'
        value={img}
        type="text"/>


        <Link to='/wizard/step1'><button> Previous Step </button></Link>
        <Link to='/wizard/step3'><button> Next Step </button></Link>
        
      </div>
    )
  }
}

function mapStateToProps(reduxState){
  const {img} = reduxState;
  return{
    img
  }
}

export default  connect(mapStateToProps, {updateImage})(StepTwo)