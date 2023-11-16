import express from "express";
import {addNewTodo, deleteTodo, getAllTodos, toggleTodoDone, updateTodo} from '../controller/todo-controller.js'

const route = express.Router();

route.post('/todos', addNewTodo);
route.get('/todos', getAllTodos)
route.get('/todos/:id', toggleTodoDone)
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id', deleteTodo)

export default route;