import React, { Component } from 'react'
import shuffle from 'lodash.shuffle'

import './App.css'

import Card from './Card'
import GuessCount from './GuessCount'
import HallOfFame, { FAKE_HOF } from './HallOfFame'

const SIDE = 6
const SYMBOLS = '😀🎉💖🎩🐶🐱🦄🐬🌍🌛🌞💫🍎🍌🍓🍐🍟🍿'

class App extends Component {
  state = {
    cards: this.generateCards(),
    currentPair: [],
    guesses: 0,
    matchedCardIndices: []
  }

  generateCards () {
    const result = []
    const size = SIDE * SIDE
    const candidates = shuffle(SYMBOLS)
    while (result.length < size) {
      const card = candidates.pop()
      result.push(card, card)
    }
    return shuffle(result)
  }

  // fonction callback: binding/* */
  handleCardClick = card => {
    console.log(card, 'clicked', this)
  }

  render () {
    const { cards, currentPair, matchedCardIndices } = state
    const won = new Date().getSeconds() % 2 === 0
    return (
      <div className='memory'>
        <GuessCount guesses={1} />
        {this.cards.map((card, i) => (
          <Card
            key={i}
            card={card}
            feedback='visible'
            onClick={this.handleCardClick}
          />
        ))}

        {won && <HallOfFame entries={FAKE_HOF} />}
      </div>
    )
  }
}

export default App
