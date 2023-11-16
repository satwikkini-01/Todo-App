
import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../redux/actions";
import { useDispatch, useSelector} from "react-redux";

import { ACTIVE_TODOS, DONE_TODOS, ALL_TODOS } from "../redux/actions/type";


import Todo from './Todo'
import Tabs from "./Tabs";

const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab)


    useEffect(() => {
        dispatch(getAllTodos());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getTodos = () => {
        if(currentTab === ALL_TODOS){
            return todos;
        }
        else if(currentTab === ACTIVE_TODOS){
            return todos.filter(todo => !todo.done)
        }
        else if(currentTab === DONE_TODOS){
            return todos.filter(todo => todo.done)
        }
    }

    const removeAllDone = () =>{
        todos.forEach(({done, _id}) =>{
            if(done){
                dispatch(deleteTodo(_id));
            }
        })
    }


    return (
        <article>
            <div style={{marginLeft: "60px"}}>
                <Tabs currentTab={currentTab}/>
                {
                    todos.some(todo => todo.done) ? (
                        <button
                            onClick={removeAllDone}
                            className="button clear"
                        >
                            Remove Done Todos
                        </button>
                    ) : null
                }
            </div>
            <ul>
                {
                    getTodos().map(todo =>(
                        <Todo 
                        key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}

export default Todos;