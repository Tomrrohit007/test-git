import {Component} from "react"
import "./index.css"

class Stopwatch extends Component{
    state={count:0, timeId:"", buttonDisable:false}

    onClickStart=()=>{
        const {buttonDisable}=this.state
        if (buttonDisable===false){
            const timId = setInterval(this.tick, 1000)
            this.setState(prevState=>({timeId:timId, buttonDisable:!prevState.buttonDisable}))
        }
    }

    tick = ()=>{
        this.setState(prevState=>({count:prevState.count + 1}))
    }

    onClickReset=()=>{
        const {timeId} = this.state
        clearInterval(timeId)
        this.setState({count:0, timeId:""})
    }

    onClickStop=()=>{
        const {timeId, buttonDisable} = this.state
        if (buttonDisable){
            clearInterval(timeId)
            this.setState({buttonDisable:false})
        }
    }


    render(){
        const {count} = this.state
        let minutes = Math.floor(count/60)
        let seconds = count%60
        if (minutes.toString().length<2){
            minutes = "0" + minutes.toString()
        }
        if(seconds.toString().length<2){
            seconds = "0" + seconds
            if(seconds%60===0){
                seconds= "00"
            }
        }
        
        return (
            <div className="main-container">
                <div className="card-in-card">
                <h1 className="heading">Stopwatch</h1>
                <div className="card">
                    <div className="card-heading">
                    <img className="logo" src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                    <p className="para">Timer</p>
                    </div>
                    <h1 className="timer">{`${minutes}:${seconds}`}</h1>
                    <div className="btns">
                        <button className="btn start" onClick={this.onClickStart}>Start</button>
                        <button className="btn stop" onClick={this.onClickStop}>Stop</button>
                        <button className="btn reset" onClick={this.onClickReset}>Reset</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Stopwatch