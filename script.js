function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = taskInput.value;

    var span = document.createElement("span");
    var dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    var day = ("0" + dueDate.getDate()).slice(-2); // Get day and ensure 2-digit format
    var month = ("0" + (dueDate.getMonth() + 1)).slice(-2); // Get month (zero-indexed) and ensure 2-digit format
    var year = dueDate.getFullYear(); // Get full year

    var formattedDate = day + "-" + month + "-" + year;

    span.textContent = formattedDate + " " + dueDate.toLocaleTimeString();
    span.className = "time-left";
    li.appendChild(span);

    taskList.appendChild(li);

    taskInput.value = "";
}
