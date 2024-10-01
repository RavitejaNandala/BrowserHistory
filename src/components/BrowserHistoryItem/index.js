import './index.css'

const BrowserHistoryItem = props => {
  const {itemDetails, onDeleteItem} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = itemDetails

  const deleteItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="item-container">
      <div className="item-details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="icon" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        data-testid="delete"
        type="button"
        onClick={deleteItem}
      >
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserHistoryItem
