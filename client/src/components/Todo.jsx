import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import { toggleTodo , updateTodo, deleteTodo} from '../redux/actions';
import { useState } from 'react';

const Todo = ({todo}) =>{

    const [editing,setEditing] = useState(false);

    const [text,setText] = useState(todo.data);

    const dispatch = useDispatch();


    const onFormSubmit = (e) =>{
        e.preventDefault();
        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text));
    }

    return (
        <li
            onClick={() => {
                dispatch(toggleTodo(todo._id));
            }}
            style={{
                textDecoration: todo.done ? 'line-through' : ''
            }}
        >
            <span style={{display: editing ? 'none' : ''}}>{todo.data}</span>

            <form className="formEdit" style={{display: editing ? 'inline' : 'none'}} onSubmit={onFormSubmit}>
                <input 
                    type="text"
                    value={text}
                    className='edit-todo'
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span className="icons" onClick={() => dispatch(deleteTodo(todo._id))}>
                <FontAwesomeIcon icon={faTrash} />
            </span>
            <span className="icons" onClick={() => setEditing(prevState => !prevState)}>
                <FontAwesomeIcon icon={faPen} />
            </span>
        </li>
    )
}

export default Todo;