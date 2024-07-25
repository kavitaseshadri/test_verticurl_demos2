import React from 'react'
import './FlexCard.css'

const FlexCard = ({ children }) => {
    return (
        <div>
            <h1>This is FlexCard</h1>
            <div className='flex_v'>
                {children}
            </div>
        </div>
    )
}

export default FlexCard