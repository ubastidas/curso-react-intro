import './TodoItem.css';

export const TodoItem = ( { text, completed } ) => {
    return (
        <li className="TodoItem">
            <span className={ `Icon Icon-check ${completed && 'Icon-check--active'}` }>{completed? '✔': 'NOT'}</span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{ text }</p>
            <span className='Icon Icon-delete'>X</span>
        </li>
    )  
}
