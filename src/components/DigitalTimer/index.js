import { Component } from "react";
import "./index.css";

class DigitalTimer extends Component {
    state = {intialTime:25*60, isTimerRunning:false, intialCount:25, timeId:"", increamentDisable:false}


tick=()=>{
    const {intialTime} = this.state
    if (intialTime>0){
        this.setState(prevState=>({intialTime:prevState.intialTime - 1}))
    }
    if(intialTime===0){
        this.resetCount()
    }
}

startCount =()=>{
    const {isTimerRunning} = this.state
    isTimerRunning===false?this.timeId = setInterval(this.tick, 1000):clearInterval(this.timeId)
    this.setState(prevState=>({isTimerRunning:!isTimerRunning}))
    this.setState({timeId:this.timeId})
    this.setState({increamentDisable:true})
}

onDecreaseCount=()=>{
  const {increamentDisable} = this.state
    if(increamentDisable===false){
        this.setState(prevState=>({intialCount:prevState.intialCount - 1,intialTime:prevState.intialTime - 60}))
    }
}
onIncreaseCount=()=>{
  const {increamentDisable}=this.state
    if(increamentDisable===false){
        this.setState(prevState=>({intialCount:prevState.intialCount + 1,intialTime:prevState.intialTime + 60}))
    }
    
}

resetCount=()=>{
    const {timeId} = this.state
    this.setState({
        intialTime:25*60, isTimerRunning:false, intialCount:25
    })
    clearInterval(timeId)
    this.setState({increamentDisable:true})
}

render() {
    const {intialTime, isTimerRunning, intialCount} = this.state
    let minutes = (Math.floor(intialTime / 60)).toString()
    let seconds = (intialTime - minutes*60).toString()
    if (intialTime%60===0){
        seconds = "00"
    }
    else if(seconds.toString().length<2){
        seconds =  "0" + seconds
    }
    if(minutes.toString().length<2){
        minutes = "0" + minutes 
    }
    else if(minutes===0){
        minutes = "00"
    }

    const btnUrl = isTimerRunning?'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const btnAltText = isTimerRunning?'pause icon' : 'play icon'

    return (
      <div className="main-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="bottom-section">
          <div className="logo-section">
            <div className="logo-background">
              <p className="timer-count">
                {`${minutes}:${seconds}`} <br/> <span className="status">{isTimerRunning?"Running":"Paused"}</span>
              </p>
            </div>
          </div>
          <div className="control-container">
            <div className="btns">
              <button className="start-btn">
                <img
                  className="btn-logo"
                  src={btnUrl}
                  alt={btnAltText}
                  onClick = {this.startCount}
                />
                {isTimerRunning?"Pause":"Start"}
              </button>
              <button className="start-btn">
                <img
                  className="btn-logo"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                  alt=""
                  onClick={this.resetCount}
                />
                Reset
              </button>
            </div>
            <p className="para">Set Timer limit</p>
            <div className="increment-btn-container">
              <button className="btn" onClick={this.onDecreaseCount}>-</button>
              <p className="count">{intialCount}</p>
              <button className="btn" onClick={this.onIncreaseCount}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer;
