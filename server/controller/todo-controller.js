import todo from "../model/Todo.js";

export const addNewTodo = async (req,res) => {
    try{
        const newTodo = await todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })

        await newTodo.save()

        return res.status(200).json(newTodo);
    } catch(error) {
        res.status(500).json(error.message);
    }
}

export const getAllTodos = async(req, res) => {
    try{
        const todos = await todo.find({}).sort({'createdAt': -1});

        return res.status(200).json(todos);
    } catch(error) {
        res.status(500).json(error.message);
    }
}

export const toggleTodoDone = async(req, res) => {
    try{
        const todoRef = await todo.findById(req.params.id);

        const todoToggle = await todo.findOneAndUpdate(
            { _id: req.params.id},
            { done: !todoRef.done}
        )

        await todoToggle.save();

        return res.status(200).json(todoToggle);
    } catch(error) {
        res.status(500).json(error.message);
    }
}

export const updateTodo = async(req, res) => {
    try{
        await todo.findOneAndUpdate(
            { _id: req.params.id},
            { data: req.body.data}
        )

        const todoEdit = await todo.findById(req.params.id);

        return res.status(200).json(todoEdit);
    } catch(error) {
        res.status(500).json(error.message);
    }
}

export const deleteTodo = async(req, res) => {
    try{
        const todoDelete = await todo.findByIdAndDelete(req.params.id)

        return res.status(200).json(todoDelete);
    } catch(error) {
        res.status(500).json(error.message);
    }
}