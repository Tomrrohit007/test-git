import { Component } from "react"
import { TailSpin } from "react-loader-spinner"
import "./index.css"

class BlogItemDetails extends Component{
    state = {blogData:{}, isLoading:true}

    componentDidMount(){
        this.getBlogData()
    }

    getBlogData= async()=>{
        const {match} = this.props
        const {params} = match
        const {id} = params
        const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
        const data  = await response.json()
        const updateData ={
            title:data.title,
            author:data.author,
            id:data.id,
            avatarUrl:data.avatar_url,
            imageUrl:data.image_url,
            topic:data.topic,
            content:data.content
           }
           console.log(data)
           this.setState({blogData:updateData, isLoading:false})
          }

          render(){
            const {isLoading, blogData} = this.state
            const {title, author, avatarUrl, imageUrl, content} = blogData 
            const contentx =()=> {
                return <div className="detail">
                   <h1 className="heading">{title}</h1> 
                   <div className="bottom-section">
                    <p className="author"><img className="avatar" src={avatarUrl} alt=""/>{author}</p>
                    <img className="img image" src={imageUrl}/>
                    <p className="title para">{content}</p>
                    </div>
                   
                </div>
            }
            return(
                <div className="main">
                {isLoading?<TailSpin/>:contentx()}
                </div>
                
            )
          }
        }

export default BlogItemDetails