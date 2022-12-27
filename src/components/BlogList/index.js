import { Component } from "react";
import {TailSpin} from "react-loader-spinner";
import "./index.css";
import BlogItem from "../BlogItem";

class BlogList extends Component {
  state = { blogData: [], isLoading:true}

  componentDidMount(){
    this.getBlogList()
  }

  getBlogList= async()=>{
   const response = await fetch('https://apis.ccbp.in/blogs')
   const data =await response.json()
   const updateData = data.map(each=>({
    title:each.title,
    author:each.author,
    id:each.id,
    avatarUrl:each.avatar_url,
    imageUrl:each.image_url,
    topic:each.topic
   }))
   this.setState({blogData:updateData, isLoading:false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="blog-list-container">
        {isLoading?<TailSpin/>:blogData.map(eachItem=><BlogItem eachItem = {eachItem} key={eachItem.id}/>)}
      </div>
    );
  }
}

export default BlogList;
