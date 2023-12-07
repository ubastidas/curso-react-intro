import './TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {

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
