import { useEffect, useState } from 'react'
import './index.scss'
import { getImages } from '../../api'

const Work = () => {
  const [imageList, setImageList] = useState([])
  const [nextCursor, setNextCursor] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages()
      setImageList(responseJson.resources)
      setNextCursor(responseJson.next_cursor)
    }

    fetchData()
  }, [])

  const handleLoadMoreButtonClick = async () => {
    const responseJson = await getImages(nextCursor)
    setImageList((currentImageList) => [
      ...currentImageList,
      ...responseJson.resources,
    ])
    setNextCursor(responseJson.next_cursor)
  }

  return (
    <div className="container work-page">
      <div className="image-section">
        <div className="card-section">
          {imageList.map((image) => (
            <img className="img" src={image.url} alt={image.public_id}></img>
          ))}
        </div>
      </div>
      <div className="load">
        {nextCursor && (
          <button onClick={handleLoadMoreButtonClick}>LOAD MORE</button>
        )}
      </div>
    </div>
  )
}

export default Work
