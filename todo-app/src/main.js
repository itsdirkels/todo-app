const taTask = document.getElementById("task-inputarea");
const addBtn = document.getElementById("btn-add-task");
const outputEl = document.getElementById("tasks-container");


addBtn.addEventListener("click", () => {
  console.log("Clicked");
  outputEl.innerHTML += `
    <input class="ml-6" type="checkbox" name="task">
    <label for="task">${taTask.value}</label><br>
  `;
  taTask.value = "";
});