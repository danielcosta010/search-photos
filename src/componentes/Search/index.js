import React, { useState } from 'react';
import Photos from '../ApiFlickr';
import './Search.css'

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = event => {
    setInputValue(event.target.value);
  };

 
  return (
    <div>
      <h1 className='titulo'>Search Photos</h1>
      <form>
        <input
          className='search'
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder='Search...'
        
        />
      </form>
    
    <Photos inputValue={inputValue}/>
    </div>
  )
}
//const DisplayValue = ({ inputValue }) => <div>{inputValue}</div>;


export default Search