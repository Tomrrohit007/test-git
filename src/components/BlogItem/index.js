import "./index.css"
import {Link} from "react-router-dom"

const BlogItem =(props)=>{
    const {eachItem} = props
    const {title, id, topic, imageUrl, avatarUrl, author} = eachItem
    return (
        <Link to={`/blogs/${id}`}>
        <li className="blogitem-container">
        <img className="img" src={imageUrl} alt=""/>
        <div className="content">
            <p className="title">{topic}</p>
            <p className="topic">{title}</p>
            <p className="author"><img className="avatar" src={avatarUrl} alt="avatar"/>{author}</p>
        </div>
        </li>
        </Link>
    )
}

export default BlogItem