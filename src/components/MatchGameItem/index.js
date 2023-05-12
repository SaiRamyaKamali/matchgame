import './index.css'

const MatchGameItem = props => {
  const {thumbnailImage, onClickThumbnail, id} = props
  const clickThumbnail = () => {
    onClickThumbnail(id)
  }

  return (
    <li>
      <button className="thumbnail-button" onClick={clickThumbnail}>
        <img
          src={thumbnailImage}
          className="thumbnailImage"
          alt={thumbnailImage}
        />
      </button>
    </li>
  )
}

export default MatchGameItem
