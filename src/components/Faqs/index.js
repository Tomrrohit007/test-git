import { Component } from "react"
import "./index.css"
import FaqItem from "../FaqItem/index"


class Faqs extends Component{
    render(){
        const {faqsList} = this.props
        return (
            <div className="main-container">
                <div className="card">
                    <h1 className="heading">FAQs</h1>
                    <ul className="faq-list">
                        {faqsList.map(eachItem=><FaqItem eachItem={eachItem} key={eachItem.id}/>)}
                    </ul> 
                    
                </div>
            </div>
        )
    }
}

export default Faqs