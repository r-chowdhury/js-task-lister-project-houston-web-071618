class List {
  constructor(title){
    this.title = title
    this.addDiv();
    this.addSelect();
    this.deleteList();
  }
  // your code here
  // addTask(taskName, priorityLevel){
  //   let task = new Task(taskName, priorityLevel)
  //   this.tasks.push(task);
  // }
  //
  // deleteTask(taskId) {
  //   //iterate through the list that the argument is in
  //   //delete argument
  //   for (let id = 0; id < this.tasks.length; id++) {
  //     if (this.tasks[id].id === taskId) {
  //       delete this.tasks.splice(id, id+1)
  //     }
  //   }
  //   return this.tasks
  // }

  // // deleteList(listId) {
  //   for (let i)
  //   if this.id === listId {
  //
  //   }
  addDiv(){
    const listsDiv = document.getElementById("lists");
    let newList = document.createElement("div");
    newList.innerHTML =
    `<h2>${this.title}
        <button data-title="${this.title}" class="delete-list">X</button>
    </h2>
    <ul id = "${this.title}">

    </ul>`
    listsDiv.appendChild(newList);
  }

  addSelect(){
    const parentList = document.getElementById("parent-list");
    const option = document.createElement("option");
    option.value = this.title;
    option.innerHTML=`${this.title}`
    parentList.appendChild(option);
  }

  deleteList() {
    const deleteButtonLength = document.getElementsByClassName("delete-list").length
    const deleteButton = document.getElementsByClassName("delete-list")[deleteButtonLength-1]
    deleteButton.addEventListener("click",function(event) {
      event.path[3].removeChild(event.path[2])
    } )

  }
}
