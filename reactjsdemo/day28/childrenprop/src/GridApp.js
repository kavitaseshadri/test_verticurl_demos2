import React from 'react'
import GridCard from './container/GridCard'
import Dummy from './components/dummy'

const GridApp = () => {
    return (
        <GridCard>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <Dummy></Dummy>
            <Dummy></Dummy>
        </GridCard>
    )
}

export default GridApp