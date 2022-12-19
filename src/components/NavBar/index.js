import "./index.css";

const NavBar = (props) => {
    const {score, totalScore, gameOver} = props
    const scoreContent = 
     (<div className="score-cont">
    <p className="score">{`Score: ${score}`}</p>
    <p className="top-score">{`Top Score: ${totalScore}`}</p>
  </div>
    )
  return (
    <div className="navbar-container">
      <div className="nav-logo-cont">
        <img
          className="logo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <p className="nav-logo">Emoji Game</p>
      </div>

      {gameOver===false?scoreContent:null}
    </div>
  )
}

export default NavBar;
