import React from 'react'

const Teamcard=(props) =>   {
    console.log(props)
  return (
    <div>
        <h3>{props.name}</h3>
        <h4>{props.position}</h4>
        <span>{props.date}</span>
        <p>{props.discription}</p>
    </div>
  )
}

export default Teamcard