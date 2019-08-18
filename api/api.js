const todos = require('./todos');

const getToDos = async (ctx) => {
    return ctx.body = todos.getToDos();
}

const addToDo = async (ctx) => {
    const { todo } = ctx.request.body;
    if (!todo) return ctx.body = { error: "missing todo message!" };
    todos.addNewToDo(todo);
    return ctx.redirect('/');
}

const toggleToDo = async (ctx) => {
    const { id } = ctx.request.body;
    todos.toggleToDo(id);
    return ctx.redirect('/');
}

const deleteToDo = async (ctx) => {
    const { id } = ctx.request.body;
    todos.deleteToDoById(id);
    return ctx.redirect('/');
}

module.exports = {
    getToDos,
    addToDo,
    toggleToDo,
    deleteToDo
};