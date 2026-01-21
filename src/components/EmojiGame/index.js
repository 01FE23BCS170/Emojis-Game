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
  state = {score: 0, topScore: 0, clickedEmojisList: [], isGameOver: false}

  emojiClicked = id => {
    const {score, topScore, clickedEmojisList} = this.state
    const {emojisList} = this.props

    const emojiPresInClickedEmojis = clickedEmojisList.includes(id)

    if (emojiPresInClickedEmojis) {
      this.setState({isGameOver: true})
    } else {
      const newScore = score + 1
      const updatedClickedEmojis = [...clickedEmojisList, id]

      // Won
      if (newScore === emojisList.length) {
        this.setState({
          score: newScore,
          topScore: Math.max(newScore, topScore),
          clickedEmojisList: updatedClickedEmojis,
          isGameOver: true,
        })
      } else {
        // continue the game
        this.setState({
          score: newScore,
          topScore: Math.max(newScore, topScore),
          clickedEmojisList: updatedClickedEmojis,
        })
      }
    }
  }

  tryAgainClickedFun = () => {
    this.setState({
      score: 0,
      clickedEmojisList: [],
      isGameOver: false,
    })
  }

  shuffledEmojisListFun = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, clickedEmojisList, isGameOver} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = this.shuffledEmojisListFun()
    const isWon = clickedEmojisList.length === emojisList.length
    const winOrLoseCard = (
      <WinOrLoseCard
        won={isWon}
        tryAgainClickedFun={this.tryAgainClickedFun}
        score={score}
      />
    )
    const output = !isGameOver ? (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    ) : (
      winOrLoseCard
    )
    return (
      <div>
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        <div className="below-container">{output}</div>
      </div>
    )
  }
}

export default EmojiGame
