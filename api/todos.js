class Api {
    constructor() {
        this.todosList = [{
            id: 0,
            todo: "Write better code!",
            isActive: true
        }];
    }

    addNewToDo(todo) {
        const id = this.getLastId();
        const newToDo = {
            id,
            todo,
            isActive: true
        };
        this.todosList.push(newToDo);
        return newToDo;
    }

    getToDos() {
        return this.todosList;
    }

    getToDoById(id) {
        return this.todosList.find(t => t.id === id);
    }

    getLastId() {
        return this.todosList[this.todosList.length - 1].id + 1;
    }

    toggleToDo(id) {
        let updatedToDo = {};
        const newToDoList = this.todosList.map(td => {
            if (td.id == id) {
                td.isActive = !td.isActive;
                updatedToDo = td;
            }
            return td;
        });
        this.todosList = newToDoList;
        return updatedToDo;
    }

    deleteToDoById(id) {
        let deletedToDo = {};
        this.todosList = this.todosList.filter(t => {
            if(t.id !== id){
                return true
            }
            else {
                deletedToDo = t;
                return false;
            }
        });
        return deletedToDo;
    }
}

module.exports = new Api();
