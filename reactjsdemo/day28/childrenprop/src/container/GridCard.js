import React from 'react'
import './GridCard.css'

const GridCard = (props) => {
    return (
        <div>
            <h1>This is GridCard</h1>
            <div className='grid1'>
                {props.children}
            </div>
        </div>
    )
}

export default GridCard