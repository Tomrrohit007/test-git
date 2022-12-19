import "./index.css"

const WinOrLoseCard = (props)=>{
    const {score, resetEveryThing} = props
    const textContent = score===12?"You Won":"You Lose"
    const paraContent = score===12?"Best Score":"Score"
    const onClickPlayAgain=()=>{
        resetEveryThing()
    }

    const imgUrl = score===12?"https://assets.ccbp.in/frontend/react-js/win-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png"

return(
    <div className="win-lose-container">
        <div className="text">
            <h1 className="result">{textContent}</h1>
            <p className="para">{paraContent}</p>
            <p className="scores">{`${score}/12`}</p>
            <button className="button" onClick={onClickPlayAgain}>Play Again</button>
        </div>
        <img className="result-img" src={imgUrl} alt="win or lose"/>
    </div>
)
}

export default WinOrLoseCard