import React from 'react'


export default function House(props) {
  const { id, name, address, city, state, zip } = props
  return (
    <div>
      <div>
        <p> Property Name: {name} </p>
        <p>  address: {address}  </p>
        <p> city: {city} </p>
        <p> state: {state} </p>
        <p> zipcode: {zip}  </p>
        <button onClick={()=>props.deleteHouse(id)}>Delete</button>
      </div>

    </div>
  )
}