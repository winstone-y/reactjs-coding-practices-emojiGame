// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="nav-bg">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="nav-title">Emoji Game</h1>
      </div>
      {score < 12 ? (
        <div className="nav-text">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
