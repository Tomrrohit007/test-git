import { Component } from "react"
import "./index.css"

class FaqItem extends Component{
    state = {isOpened:false}

    onClickExpand=()=>{
        this.setState(prevState=>({isOpened:!prevState.isOpened}))
    }
  render(){
    const {isOpened} = this.state
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem 
    let imgUrl
    let imgAltText


    if(isOpened===true){
        imgUrl = "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        imgAltText = "minus"
    }
    else{
        imgUrl = "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        imgAltText = "plus"
    }
    return(
        <li className="faq-item">
            <div className="ques-cont">
                <h1 className="ques">{questionText}</h1>
                <button className="btn" onClick={this.onClickExpand}>
                <img className="img" src={imgUrl} alt={imgAltText}/>
                </button>
            </div>
            {isOpened && <hr/>}
            {isOpened && <p className="ans">{answerText}</p>}
        </li>
    )
    }
}

export default FaqItem
