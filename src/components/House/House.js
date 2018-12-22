import React from 'react'


export default function House(props) {
  const { id, name, address, city, state, zip, img, rent, mortgage } = props
  return (
    <div>
      <div>
        <img src={img} alt=""/>
        <p> Property Name: {name} </p>
        <p>  address: {address}  </p>
        <p> city: {city} </p>
        <p> state: {state} </p>
        <p> zipcode: {zip}  </p>
        <p> Monthly mortgage: {mortgage}  </p>
        <p> Desired Rent: {rent}  </p>
        <button onClick={()=>props.deleteHouse(id)}>Delete</button>
      </div>

    </div>
  )
}