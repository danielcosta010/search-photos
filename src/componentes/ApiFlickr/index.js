import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ApiFlickr.css'
import Gallery from '../Gallery'
const flickrApi = '81e4749c90fd38fb7f47c71d1b0d8fe5'


const Photos = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const fetchData = async () => {
      
      const response = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApi}&tags=${props.inputValue}&per_page=25&format=json&nojsoncallback=1`
      );
      setImages(response.data.photos.photo);
      setLoading(false);  
               
    } 
      
      fetchData();
    }, [props.inputValue]);
    
    if (loading) {
      return <div className='loading'></div>;
    }
    
    return (
      <Gallery data={images}/>
    );
 
}


export default Photos

