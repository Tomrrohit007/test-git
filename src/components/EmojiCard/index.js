import "./index.css"

const EmojiCard = (props)=>{
    const {eachItem, increaseCount} = props
    const {emojiUrl, emojiName, id} = eachItem
    const onClickEmoji=()=>{
        increaseCount(id)
    }
    return (
        <li className="emoji-card">
            <button className="emoji-btn" onClick={onClickEmoji}>
            <img className="emoji-img" src={emojiUrl} alt={emojiName}/>
            </button>
        </li>
    )
}

export default EmojiCard