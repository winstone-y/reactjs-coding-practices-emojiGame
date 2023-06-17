/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, idList: ['id']}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onImage = id => {
    const {idList, score} = this.state

    if (idList.includes(id)) {
      this.setState({idList: []})
    } else if (score === 11) {
      this.setState({idList: [], score: 12, topScore: 12})
    } else {
      this.setState(prevState => ({
        idList: [...prevState.idList, id],
        score: prevState.score + 1,
      }))
    }
  }

  playAgainBtn = () => {
    const {score} = this.state
    this.setState({idList: ['id'], score: 0, topScore: score})
  }

  render() {
    const newEmojiList = this.shuffledEmojisList()
    const {score, topScore, idList} = this.state

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} />
        <ul className="app-body">
          {idList.length !== 0 ? (
            newEmojiList.map(emojiCard => (
              <EmojiCard
                onImage={this.onImage}
                emojiCard={emojiCard}
                key={emojiCard.id}
              />
            ))
          ) : (
            <WinOrLoseCard playAgainBtn={this.playAgainBtn} score={score} />
          )}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
