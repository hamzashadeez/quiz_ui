import React from 'react'
import './Number.css'

function Number(props) {
    return (
        <div className='Number' style={{backgroundColor: props.color}}>
            <p>{props.number}</p>
        </div>
    )
}

export default Number
