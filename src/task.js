let taskId=0;
class Task {
  // your code
  constructor(taskName, priorityLevel) {
    this.id = ++taskId;
    this.taskName = taskName
    this.priorityLevel = priorityLevel
    this.deleteTask()
  }

  static deleteTask(divName) {
    const deleteButtonLength = document.getElementById(`${divName}`).getElementsByClassName("delete-task").length
    const deleteButton = document.getElementById(`${divName}`).getElementsByClassName("delete-task")[deleteButtonLength-1]
debugger
    deleteButton.addEventListener("click", function(event) {
      event.path[2].removeChild(event.path[1])
    } )
  }
}
