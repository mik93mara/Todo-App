const todos = require('./todos');

const getToDos = async (ctx) => {
    return ctx.body = todos.getToDos();
}

const addToDo = async (ctx) => {
    const { todo } = ctx.request.body;
    if (!todo) return ctx.body = { error: "missing todo message!" };
    const newToDo = todos.addNewToDo(todo);
    return ctx.redirect('/');
}

const toggleToDo = async (ctx) => {
    const { id } = ctx.request.body;
    const toggledToDo = todos.toggleToDo(id);
    return ctx.redirect('/');
}

const deleteToDo = async (ctx) => {
    const { id } = ctx.request.body;
    const deletedToDo = todos.deleteToDoById(id);
    return ctx.body = {
        deleted: deletedToDo
    }
}

module.exports = {
    getToDos,
    addToDo,
    toggleToDo,
    deleteToDo
};