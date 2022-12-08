import './index.css'

const History = props => {
  const {eachHistory, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistory
  const onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="list">
      <div className="history-details">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} className="app-icon" alt="domain logo" />
        <div className="title-container">
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="button"
        onClick={onClickDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          className="delete-icon"
          alt="delete icon"
        />
      </button>
    </li>
  )
}
export default History
