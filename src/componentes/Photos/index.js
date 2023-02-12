import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Photos.css'
const flickrApi = '81e4749c90fd38fb7f47c71d1b0d8fe5'


const Photos = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApi}&tags=praia&per_page=25&format=json&nojsoncallback=1`
      );
      setImages(response.data.photos.photo);
      setLoading(false);
    };
    
    fetchData();
  }, []);
  
  if (loading) {
    return <div className='loading'></div>;
  }
  
  return (
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
  );
 
}


export default Photos

