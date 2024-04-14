import React from 'react'

function PropsCard(props) {
    console.log(props)
  return (
    <div className=''>
        <div className='border p-2'>
            <h3>{props.title}</h3>
            <h5>{props.name}</h5>
            <span>{props.date}</span>
            <p>{props.description}</p>
        </div>
        {/* <div className=''>
        <h3>Name : Vipul Vijay Prakash Vishwakarma</h3>
        <h5>Field : Software development</h5>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>      */}
    </div>
  )
}

export default PropsCard