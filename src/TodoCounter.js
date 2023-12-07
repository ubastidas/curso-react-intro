
import './TodoCounter.css';

export const TodoCounter = ({ completed, total }) => {
  return (
    completed === total ?
    <h1 className="TodoCounter">Feicidades completaste todo los TODOS</h1>:
    <h1 className="TodoCounter">
      Has completado <span>{ completed }</span> de <span>{ total }</span> TODOS
    </h1>    
  )
}
