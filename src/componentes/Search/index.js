import React, { useState } from 'react';
import ApiFlickr from '../ApiFlickr';
import './Search.css'

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };
  const prevent = e => {
    e.preventDefalt()
  }

  return (
    <div>
      <h1 className='titulo'>Search Photos</h1>
      <form onSubmit={prevent}>
        <input
          className='search'
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder='Search...'

        />
      </form>

      <ApiFlickr inputValue={inputValue} />
    </div>
  )
}



export default Search