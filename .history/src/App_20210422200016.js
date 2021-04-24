import React, { Component } from 'react'
import './App.css'
import Card from './Card.js'
import GuessCount from './GuessCount.js'
class App extends Component {
  render () {
    return (
      <div className='memory'>
        <Card />
        <GuessCount />
      </div>
    )
  }
}

export default App
