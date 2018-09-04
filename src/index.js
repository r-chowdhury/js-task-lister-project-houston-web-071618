document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  // const app = new TaskLister();
});

const createListForm = document.querySelector('#create-list-form')
// const addToyForm = document.getElementsByClassName('add-toy-form')[0]
createListForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!document.getElementById("create-task-form")) {
    let f = document.createElement("form");
    f.id = "create-task-form"
    f.innerHTML =
        `<label for="parent-list">Select List:</label>
          <select id="parent-list">
            <label for="new-task-description">Task description:</label>
            <input required="" type="text" id="new-task-description" placeholder="description">
            <label for="new-task-priority">Priority level:</label>
            <input type="text" id="new-task-priority" placeholder="priority">
            <input type="submit" value="Create New Task">
          </select>`

    appContent = document.getElementById("app-content");
    appContent.appendChild(f);

    let divLists = document.createElement("div");
    divLists.id = "lists"

    appContent.appendChild(divLists);

    const createTask = document.querySelector('#create-task-form')

    createTask.addEventListener('submit', function(event) {
      event.preventDefault();
      listName=document.getElementById("parent-list").value; 
      description = document.getElementById("new-task-description").value;
      priority = document.getElementById("new-task-priority").value;
      // unorderedListId = document.getElementById("")

      ul = document.getElementById(`${listName}`)
      ul.innerHTML +=
      `
        <li>
        Task: ${description}
        <button data-list-title="${listName}" data-task-name="${description}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${priority}
      </li>
      `
      Task.deleteTask(listName);
    });

    // parentList = getElementById("parent-list")
    // parentList.innerHTML = f.getElementById("parent-list")
    }

    newListTitle = document.getElementById("new-list-title").value;
    new List(newListTitle);
})


// const addToyForm = document.getElementsByClassName('add-toy-form')[0]
