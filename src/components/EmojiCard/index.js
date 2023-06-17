// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCard, onImage} = props
  const {id, emojiName, emojiUrl} = emojiCard
  const onImageClick = () => {
    onImage(id)
  }
  return (
    <li className="emoji-card">
      <button onClick={onImageClick} className="emoji-button" type="button">
        <img alt={emojiName} src={emojiUrl} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard
