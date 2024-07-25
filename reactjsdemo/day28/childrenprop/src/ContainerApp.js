import React from 'react'
import './App.css'
import Dummy from './components/dummy'

const App = () => {
  return (
    <div className='main_grid'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <Dummy></Dummy>
      <Dummy></Dummy>
    </div>
  )
}

export default App