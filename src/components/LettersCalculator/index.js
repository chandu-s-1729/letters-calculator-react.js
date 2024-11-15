// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    letterCount: 0,
  }

  onLettersCalculator = event => {
    const letter = event.target.value

    this.setState({letterCount: letter.length})
  }

  render() {
    const {letterCount} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="letters-calculator-container">
            <h1 className="heading"> Calculate the Letters you enter </h1>
            <div>
              <label htmlFor="letters" className="letters-label">
                Enter the Phrase
              </label>
              <br />
              <input
                onChange={this.onLettersCalculator}
                className="text-bar"
                type="text"
                id="letters"
                placeholder="Enter the phrase"
              />
            </div>
            <div className="letters-count-container">
              <p className="letters-count"> No.of letters: {letterCount} </p>
            </div>
          </div>
          <img
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
