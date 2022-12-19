import { Component } from "react"
import {v4 as uuidv4} from "uuid"
import "./index.css"
import EmojiCard from "../EmojiCard/index"
import NavBar from "../NavBar/index"
import WinOrLoseCard from "../WinOrLoseCard/index"


class EmojiGame extends Component{
  state = {score:0, topScore:0, prevClickedList:[], gameOver:false}

  

  increaseCount=(id)=>{ 
    const {prevClickedList} = this.state
    prevClickedList.length===11?this.setState({gameOver:true}):this.setState({gameOver:false})
    const SameId = prevClickedList.some(eachItem=>eachItem===id)
    SameId===false?this.setState(prevState=>({prevClickedList:[...prevState.prevClickedList, id], score:prevState.score + 1})):this.setState({gameOver:true})
  }

  resetEveryThing=()=>{
    this.setState({score:0,prevClickedList:[], gameOver:false})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onRenderEmojis=()=>{
    const callingShuffle = this.shuffledEmojisList()
    return callingShuffle.map((eachItem)=>
          <EmojiCard
           eachItem={eachItem}
            key={eachItem.id}
            increaseCount={this.increaseCount}
            />)
  }

 onRenderResult = ()=>{
    const {score, topScore} = this.state
    this.setState(prevState=>{
      if(prevState.topScore<score){
        return {topScore:score}
      }
    })

    return <WinOrLoseCard
    score={score}
    topScore={topScore}
    resetEveryThing={this.resetEveryThing}
  />
  }
  render(){
    const {score, topScore, gameOver, prevClickedList} = this.state
    console.log(prevClickedList)

    return(
      <div className="main-container">
        <NavBar score = {score} totalScore={topScore} key={uuidv4()} gameOver={gameOver}/>
        <div className="bottom-section">
          <ul className="emoji-list">
          {gameOver? this.onRenderResult():this.onRenderEmojis()}
          </ul>
        </div>

      </div>
    )
  }
}

export default EmojiGame
