import './TodoCreateButton.css';

export const TodoCreateButton = () => {
  return (
    <input 
      className="TodoCreateButton" 
      type="button" 
      value={'+'} 
      onClick={()=> console.log('Cliekced')}
    />
  )
}
