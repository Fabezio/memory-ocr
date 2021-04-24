import React from 'react'
import PropTypes from 'prop-types'

import './HallOfFame.css'

const HallOfFame = ({ entries }) => (
  <table className='hallOfFame'>
    <tbody>
      {entries.map(({ id, date, guesses, player }) => {
        return (
          <tr key={id}>
            <td class='date'>{date}</td>
            <td class='guesses'>{guesses}</td>
            <td class='player'>{player}</td>
          </tr>
        )
      })}
    </tbody>
  </table>
)

HallOfFame.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      guesses: PropTypes.string.isRequired,
      player: PropTypes.string.isRequired
    })
  ).isRequired
}

export default HallOfFame

// == Internal helpers ==============================================

export const FAKE_HOF = [
  { id: 3, guesses: 18, date: '10/10/2017', player: 'Jane' },
  { id: 2, guesses: 23, date: '11/10/2017', player: 'Kevin' },
  { id: 1, guesses: 31, date: '06/10/2017', player: 'Louisa' },
  { id: 0, guesses: 48, date: '14/10/2017', player: 'Marc' }
]
