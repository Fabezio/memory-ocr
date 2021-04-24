import React, { Component } from 'react'
import './App.css'
import Card from './Card.js'
import GuessCount from './GuessCount.js'
class App extends Component {
  render () {
    return (
      <div className='memory'>
        <GuessCount guesses={0} />
        <Card card='😃' feedback='hidden' />
        <Card card='💖' feedback='justMatched' />
        <Card card='🎩' feedback='justMismatched' />
        <Card card='🐶' feedback='visible' />
        <Card card='🐱' feedback='hidden' />
        <Card card='🍕' feedback='hidden' />
      </div>
    )
  }
}

export default App
