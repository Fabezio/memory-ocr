import React from 'react'
import PropTypes from 'prop-types'

import './GuessCount.css'

const GuessCount = ({ guesses }) => {
  return <div className='guesses'>{guesses}</div>
}
GuessCount.propTypes = { guesses: PropTypes.number.isRequired }
export default GuessCount
