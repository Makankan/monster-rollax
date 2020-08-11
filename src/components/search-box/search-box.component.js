import React from 'react';
import './search-box.style.css';

export const Search=({placeHolder,handleClick})=>(
<input className='search' 
        type='search'
        placeholder={placeHolder} 
        onChange={handleClick}/>
);
