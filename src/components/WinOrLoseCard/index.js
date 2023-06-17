// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgainBtn} = props
  let scoreText
  let winOrLose
  let imgUrl

  if (score === 12) {
    scoreText = 'Best Score'
    winOrLose = 'You Won'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    scoreText = 'Score'
    winOrLose = 'You Lose'
    imgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  return (
    <div className="lose-card">
      <div className="text">
        <h1 className="lose-title">{winOrLose}</h1>
        <div className="lose-score-text">
          <p className="score-title">{scoreText}</p>
          <p className="lose-score">{score}/12</p>
        </div>
        <button onClick={playAgainBtn} type="button" className="play-again">
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img className="image" alt="win or lose" src={imgUrl} />
      </div>
    </div>
  )
}
export default WinOrLoseCard
