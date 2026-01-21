import './index.css'

const WinOrLoseCard = props => {
  const {score, won, tryAgainClickedFun} = props
  const firstResultLine = won ? 'You Won' : 'You Lose'
  const secondResultLine = won ? 'Best Score' : 'Score'
  const imgUrl = won
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-or-lose-container">
      <div className="left-container">
        <h1 className="first-result-line">{firstResultLine}</h1>
        <p className="second-result-line">{secondResultLine}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={tryAgainClickedFun}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} height="200px" width="150px" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
