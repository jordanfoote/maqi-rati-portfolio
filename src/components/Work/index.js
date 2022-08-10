import { useState } from 'react'
import './index.scss'
import images from '../../api-mock.json'

const Work = () => {
  const [imageList, setImageList] = useState(images.resources)
  return (
    <div className="container work-page">
      <div className="image-section">
        <div className="card-section">
          {imageList.map((image) => (
            <img className="img" src={image.url} alt={image.public_id}></img>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
