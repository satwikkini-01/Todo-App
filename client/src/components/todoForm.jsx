import { useState } from "react"

import { useDispatch } from 'react-redux';

import {addTodo} from "../redux/actions";

const TodoForm = () =>{


    const [text, setText] = useState("")

    const dispatch = useDispatch();


    const onFormSubmit = (e) =>{
        e.preventDefault();

        dispatch(addTodo(text));

        setText('');
    }

    const onInputChange = (e) =>{
        setText(e.target.value)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input className="todoinput" placeholder="Enter new todo..." onChange={onInputChange} value={text}/>
        </form>
    )

}

export default TodoForm;