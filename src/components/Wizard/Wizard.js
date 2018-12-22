import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import StepOne from './wizardComponents/StepOne'
import StepTwo from './wizardComponents/StepTwo'
import StepThree from './wizardComponents/StepThree'
import {connect} from 'react-redux'
import {clearInputs} from '../../ducks/reducer'



class Wizard extends Component {
  

 

  render(){
    return(
      <div> 
        <h1>Wizzing Wizzbies</h1>
        
      <Link to='/'><button onClick={this.props.clearInputs} >Cancel</button></Link> 
      <Switch>
        <Route path='/wizard/step1' component={StepOne}/>
        <Route path='/wizard/step2' component={StepTwo}/>
        <Route path='/wizard/step3' component={StepThree}/>
      </Switch>

      
      </div>
    )
  }
}

export default connect(null, {clearInputs}) (Wizard)