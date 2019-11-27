let todoList = [];

function deleteAllTodos() {
  app.dialog.confirm(
    "Delete all todos?",
    "Cofirm",
    function() {
      todoList = [];
      saveTodosToStore();
      loadTodos();
    },
    null
  );
}

function getTodosFromStore() {
  if (localStorage.getItem("myTodoListApp")) {
    todoList = JSON.parse(localStorage.getItem("myTodoListApp"));
  }
}

function saveTodosToStore() {
  localStorage.setItem("myTodoListApp", JSON.stringify(todoList));
}

function deleteTodo(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      todoList.splice(i, 1);
      saveTodosToStore();
      loadTodos();
      break;
    }
  }
}

function markTodo(id) {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].id == id) {
      todoList[i].complete = true;
      saveTodosToStore();
      loadTodos();
      break;
    }
  }
}

function addTodo() {
  let input = document.getElementById("todoInput");
  if (input.value.trim() == "") {
    app.dialog.alert("Text input can not be empty", "Error");
  } else {
    let newTodoId = 1;
    if (todoList.length > 0) {
      newTodoId = todoList[todoList.length - 1].id + 1;
    }

    todoList.push({
      id: newTodoId,
      title: input.value.trim(),
      complete: false
    });
    input.value = "";
    saveTodosToStore();
    loadTodos();
  }
}

//load todos
function loadTodos() {
  getTodosFromStore();
  let todoContainer = document.getElementById("todoContainer");
  todoContainer.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].complete) {
      todoContainer.innerHTML += `    
      <li class="swipeout">
      <div class="item-content swipeout-content">
        <div class="item-media">
          <i
            class="icon material-icons"
            style="color: green; font-size:35px;"
            >done</i
          >
        </div>
        <div class="item-inner">
          <div class="item-title" style="font-weight: bold">
          ${todoList[i].title}
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="swipeout-delete" onClick="deleteTodo('${todoList[i].id}')">Delete</a>
      </div>
    </li>`;
    } else {
      todoContainer.innerHTML += `
      <li class="swipeout">
      <div class="item-content swipeout-content">
        <div class="item-media">
          <i
            class="icon material-icons"
            style="color: orange; font-size:35px;"
            >access_time</i
          >
        </div>
        <div class="item-inner">
          <div class="item-title" style="font-weight: bold">
        ${todoList[i].title}
          </div>
        </div>
      </div>
      <div class="swipeout-actions-right">
        <a href="#" class="color-green open-more-actions"
        onClick="markTodo('${todoList[i].id}')"
          >Mark Complete</a
        >
        <a href="#" class="swipeout-delete" onClick="deleteTodo('${todoList[i].id}')">Delete</a>
      </div>
    </li>`;
    }
  }
}

loadTodos();
