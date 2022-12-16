import { Component } from "react"
import {v4 as uuidv4} from "uuid"
import AppointmentItem from "../AppointmentItem/index"
 
import "./index.css"

class Appointments extends Component{
    state = {title:"",date:"", appointmentList:[], isStarredMarked:false}

    markAsStar = id => {
        this.setState(prevState => ({
          appointmentList: prevState.appointmentList.map(eachComment => {
            if (id === eachComment.id) {
              return {...eachComment, isStared: !eachComment.isStared}
            }
            return eachComment
          }),
        }))
      }

    onRenderContent=()=>{
        const {appointmentList, isStarredMarked} = this.state
        const starredList = appointmentList.filter(eachItem=>eachItem.isStared===true)

        const filterList = isStarredMarked?starredList:appointmentList

        return(
            filterList.map(eachItem=>
            <AppointmentItem
             eachItem={eachItem}
              key = {eachItem.id}
              markAsStar={this.markAsStar}
              />
            )
        )
    }

    starredItems=()=>{
        this.setState(prevState=>({isStarredMarked:!prevState.isStarredMarked}))
    }

    onChangeTitle=(event)=>{
        this.setState({title:event.target.value})
    }
    
    onChangeDate=(event)=>{
        this.setState({date:new Date(event.target.value)})
    }

    onSubmitClicked=(event)=>{
        event.preventDefault()
        const {title, date}=this.state
        const newAppointment = {
            id:uuidv4(),
            title,
            date,
            isStared:false,
        }
        this.setState(prevState=>({appointmentList:[...prevState.appointmentList, newAppointment], title:"", date:""}))
    }

    render(){
        return(
            <div className="main-container">
                <div className="card">
                    <div className="upper-section">
                        <div className="left-section">
                            <h1 className="heading">Add Appointment</h1>
                            <form className="form" onSubmit={this.onSubmitClicked}>
                                <div className="title-container">
                                    <label htmlFor="titleInput" className="label">Title</label>
                                    <input id="titleInput" className="title-input" type="input" placeholder="Title" onChange={this.onChangeTitle}/>
                                </div>
                                <div className="date-container">
                                    <label htmlFor="dateInput" className="label">Date</label>
                                    <input id="dateInput" className="date-input" type="date" onChange={this.onChangeDate}/>
                                </div>
                                
                                <button className="button" type="submit">Add</button>
                            </form>
                        </div>
                        <img className="main-img" src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt=""/>
                    </div>
                    <hr/>
                    <div className="bottom-section">
                        <div className="bottom-text-container">
                            <h1 className="heading">Appointments</h1>
                            <button className="starred-btn" onClick={this.starredItems}>Starred</button>
                        </div>
                        <ul className="appointment-list">
                            {this.onRenderContent()}
                        </ul>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Appointments
