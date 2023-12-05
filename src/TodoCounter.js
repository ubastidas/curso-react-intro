
import './TodoCounter.css';

export const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{ completed }</span> 
      de <span>{ total }</span> TODOS</h1>    
  )
}
