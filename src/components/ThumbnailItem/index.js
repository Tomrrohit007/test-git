import "./index.css"

const ThumbnailItem =(props)=>{
    const {thumbnail, selectImg, selectedIcon} = props
    const {id, thumbnailUrl, imageUrl} = thumbnail
    const selectedImage=()=>{
        selectImg(imageUrl, id)
    }
    const iconClass = selectedIcon?"active-icon":""
    return(
        <li className="thumbnail-item">
        <button>
        <img
          className={`icon ${iconClass}`}
          src={thumbnailUrl}
          alt="thumbnailAltText"
          onClick={selectedImage}
        />
      </button>
        </li>
    )

}

export default ThumbnailItem