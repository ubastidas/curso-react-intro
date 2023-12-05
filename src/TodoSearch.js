import React from 'react';
import './TodoSearch.css';

export const TodoSearch = () => {

  const[searchValue, setSearchValue] = React.useState('');

  console.log(searchValue);


  return (
    <input 
      className='TodoSearch' 
      type='text' 
      placeholder='Buscar..'
      value={ searchValue }
      onChange={ (event) => {
        setSearchValue(event.target.value);
      }}
    />
  )
}
