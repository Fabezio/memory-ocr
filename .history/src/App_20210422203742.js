import React, { Component } from 'react'
import './App.css'
import Card from './Card.js'
import GuessCount from './GuessCount.js'
class App extends Component {
  const cards = [
     { card:'😃', feedback:'hidden'},
        { card:'💖', feedback:'justMatched'},
        { card:'🎩', feedback:'justMismatched'},
        { card:'🐶', feedback:'visible'},
        { card:'🐱', feedback:'hidden'},
        { card:'🍕', feedback:'justMismatched'},
  ]
  render () {
    return (
      <div className='memory'>
        <GuessCount guesses={0} />
        {cards.map(({ c, f }, index) => <Card key={ index} card={c} feedback={f} />)}
        {/* <Card card='😃' feedback='hidden' />
        <Card card='💖' feedback='justMatched' />
        <Card card='🎩' feedback='justMismatched' />
        <Card card='🐶' feedback='visible' />
        <Card card='🐱' feedback='hidden' />
        <Card card='🍕' feedback='justMismatched' /> */}
      </div>
    )
  }
}

export default App
