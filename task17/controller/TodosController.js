class TodosController {
    #collection = null;
    #listView = null;
    #addTodosListView = null;

    constructor(container) {
        console.log(container);

        this.#listView = new TodosListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete: (id) => this.deleteTodo(id),
        });
        container.append(this.#listView.el);

        this.#addTodosListView = new AddTodosListView({
            onAddTodos: (newToDoItem) => this.addTodoList(newToDoItem),
        });
        container.append(this.#addTodosListView.formEl);

        this.#collection = new TodosCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList(this.#collection.list),
            this.#addTodosListView.renderList(this.#collection.list);
        });
        


    }
    addTodoList(newToDoItem) {
        this.#collection.addTodoList(newToDoItem).then(() => {
            this.#addTodosListView.renderList(this.#collection.list);
        });
    }

    toggleTodo(id) {
        this.#collection.toggleTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }

    deleteTodo(id) {
        this.#collection.deleteTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
}