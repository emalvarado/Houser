const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  img: '',
  mortgage: '',
  rent: '',
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMG = 'UPDATE_IMG';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';
const CLEAR_INPUTS = 'CLEAR_INPUTS'

export function updateName(name) {
  return{
    type: UPDATE_NAME,
    payload: name
  }
}

export function updateAddress(address) {
  return{
    type: UPDATE_ADDRESS,
    payload: address
  }
}

export function updateCity(city) {
  return{
    type: UPDATE_CITY,
    payload: city
  }
}

export function updateState(state) {
  return{
    type: UPDATE_STATE,
    payload: state
  }
}

export function updateZip(zip) {
  return{
    type: UPDATE_ZIP,
    payload: zip
  }
}

export function updateImage(img) {
  return{
    type: UPDATE_IMG,
    payload: img
  }
}
export function updateMortgage(mortgage) {
  return{
    type: UPDATE_MORTGAGE,
    payload: mortgage
  }
}
export function updateRent(rent) {
  return{
    type: UPDATE_RENT,
    payload: rent
  }
}

export function clearInputs(){
  return{
    type: CLEAR_INPUTS,
    payload: initialState
  }
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_NAME:
    return {...state, name: action.payload};

    case UPDATE_ADDRESS:
    return {...state, address: action.payload};
    
    case UPDATE_CITY:
    return {...state, city: action.payload};
    
    case UPDATE_STATE:
    return {...state, state: action.payload};
    
    case UPDATE_ZIP:
    return {...state, zip: action.payload};
    
    case UPDATE_IMG:
    return {...state, img: action.payload};
    
    case UPDATE_MORTGAGE:
    return {...state, mortgage: action.payload};
    
    case UPDATE_RENT:
    return {...state, rent: action.payload};

    case CLEAR_INPUTS:
    return action.payload

    
    
    default: return state;
  }
}