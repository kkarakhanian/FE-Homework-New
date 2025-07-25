'use strict';

// Model
function TodoModel() {
  this.todos = JSON.parse(localStorage.getItem('todos')) || [];

  this.addTodo = function(title, body) {
    const newTodo = {
      id: Date.now(),
      title,
      body,
      completed: false
    };
    this.todos.push(newTodo);
    this._commit();
  };

  this.removeTodo = function(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this._commit();
  };

  this.removeAll = function() {
    this.todos = [];
    this._commit();
  };

  this._commit = function() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
    if (this.onChange) this.onChange(this.todos);
  };

  this.bindOnChange = function(callback) {
    this.onChange = callback;
  };
}

// View
function TodoView() {
  this.form = document.getElementById('todo-form');
  this.titleInput = document.getElementById('title');
  this.bodyInput = document.getElementById('body');
  this.clearBtn = document.getElementById('clear-form');
  this.deleteAllBtn = document.getElementById('delete-all');
  this.taskList = document.getElementById('task-list');

  this.clearForm = function() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  };

  this.renderTodos = function(todos) {
    this.taskList.innerHTML = '';

    todos.forEach(todo => {
      const li = document.createElement('li');
      li.dataset.id = todo.id;

      const titleEl = document.createElement('h3');
      titleEl.textContent = todo.title;

      const bodyEl = document.createElement('p');
      bodyEl.textContent = todo.body;

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.className = 'btn red';
      delBtn.style.marginTop = '10px';

      li.appendChild(titleEl);
      li.appendChild(bodyEl);
      li.appendChild(delBtn);
      this.taskList.appendChild(li);
    });
  };

  this.bindAddTodo = function(handler) {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const title = this.titleInput.value.trim();
      const body = this.bodyInput.value.trim();

      if (title && body) {
        handler(title, body);
        this.clearForm();
      } else {
        alert('Заповніть заголовок і опис');
      }
    });
  };

  this.bindDeleteTodo = function(handler) {
    this.taskList.addEventListener('click', e => {
      if (e.target.textContent === 'Delete') {
        const id = parseInt(e.target.parentElement.dataset.id);
        handler(id);
      }
    });
  };

  this.bindClearForm = function(handler) {
    this.clearBtn.addEventListener('click', e => {
      handler();
    });
  };

  this.bindDeleteAll = function(handler) {
    this.deleteAllBtn.addEventListener('click', e => {
      if (confirm('Ви впевнені, що хочете видалити всі задачі?')) {
        handler();
      }
    });
  };
}

// Controller
function TodoController(model, view) {
  this.model = model;
  this.view = view;

  this.model.bindOnChange(this.onTodosChanged.bind(this));
  this.view.bindAddTodo(this.handleAddTodo.bind(this));
  this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
  this.view.bindClearForm(this.handleClearForm.bind(this));
  this.view.bindDeleteAll(this.handleDeleteAll.bind(this));

  this.onTodosChanged(this.model.todos);
}

TodoController.prototype = {
  onTodosChanged: function(todos) {
    this.view.renderTodos(todos);
  },

  handleAddTodo: function(title, body) {
    this.model.addTodo(title, body);
  },

  handleDeleteTodo: function(id) {
    this.model.removeTodo(id);
  },

  handleClearForm: function() {
    this.view.clearForm();
  },

  handleDeleteAll: function() {
    this.model.removeAll();
  }
};

// Inicialize
document.addEventListener('DOMContentLoaded', function () {
  const app = new TodoController(new TodoModel(), new TodoView());
});
