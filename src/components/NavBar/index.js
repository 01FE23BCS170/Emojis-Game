import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props
  const p1 = !isGameOver ? `Score: ${score}` : ''
  const p2 = !isGameOver ? `Top Score: ${topScore}` : ''

  return (
    <div className="navbar-container">
      <div className="navbar-left-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          height="35px"
          width="35px"
          alt="emoji logo"
        />
        <h1 className="navbar-logo-name">Emoji Game</h1>
      </div>
      <div className="navbar-right-content">
        <p className="score-text">{p1}</p>
        <p className="score-text">{p2}</p>
      </div>
    </div>
  )
}

export default NavBar
