import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiClicked} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  function nowEmojiClicked() {
    emojiClicked(id)
  }

  return (
    <li>
      <button
        type="button"
        className="emoji-container-btn"
        onClick={nowEmojiClicked}
      >
        <img src={emojiUrl} alt={emojiName} height="75px" width="75px" />
      </button>
    </li>
  )
}

export default EmojiCard
