const todos = require('./todos');

const index = async (ctx) => {
    const todosList = await todos.getToDos();
    await ctx.render('index', { todosList });
}

const add = async (ctx) => {
    await ctx.render('add');
}

module.exports = {
    index,
    add
};