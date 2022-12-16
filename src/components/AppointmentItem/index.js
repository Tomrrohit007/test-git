import {format} from "date-fns"
import "./index.css"

const AppointmentItem=(props)=>{
    const {eachItem, markAsStar} = props
    const {id, title, date, isStared} = eachItem
    const time = format(new Date(date), ('dd MMMM yyyy, EEEE'))
    const onStarClicked=()=>{
        markAsStar(id)
    }
    console.log(isStared)
    const starImgUrl = isStared===true?"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
    return(
        <li className="item">
            <div className="appointment-item-container">
            <p className="purpose">{title}</p>
            <p className="datetime">{`Date:${time}`}</p>
            </div>
            <button className="star-btn" onClick={onStarClicked}>
            <img className="star-img" src={starImgUrl} alt=""/>
            </button>
            
           
        </li>
    )
}
export default AppointmentItem