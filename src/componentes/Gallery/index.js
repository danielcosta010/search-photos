import NoImage from '../NoImage'
import './Gallery.css'

const Gallery = (props) => {
  const images = props.data
  return (
    images.length > 0 ? 
      <ul className='lista'>
          {images.map(image => (
            <li key={image.id} className='lista__foto'>
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                alt={image.title}
              />
            </li>
          ))}
      </ul> 
      : <NoImage />
  )
}

export default Gallery