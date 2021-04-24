import React, { Component } from 'react'
import './App.css'
import Card from './Card.js'
import GuessCount from './GuessCount.js'
class App extends Component {
  handleCardClick (card) {
    console.log(card, 'clicked')
  }
  render () {
    // const won = new Date().getSeconds() % 2 == 0
    const won = new Date().getSeconds() % 2 == 0
    const cards = [
      { card: '😃', feedback: 'hidden' },
      { card: '💖', feedback: 'justMatched' },
      { card: '🎩', feedback: 'justMismatched' },
      { card: '🐶', feedback: 'visible' },
      { card: '🐱', feedback: 'hidden' },
      { card: '🍕', feedback: 'justMismatched' }
    ]
    return (
      <div className='memory'>
        <GuessCount guesses={0} />
        {cards.map(({ card, feedback }, index) => (
          <Card
            key={index}
            card={card}
            feedback={feedback}
            onClick={this.handleCardClick}
          />
        ))}
        {won && <p>GAGNE</p>}
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
