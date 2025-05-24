//Example 1 easy
// document.getElementById("addTaskBtn").addEventListener("click",function(){
//     var task = document.getElementById("taskInput").value;
//     var taskList = document.getElementById("taskList");
//     var taskItem = document.createElement("li");
//     taskItem.textContent = task;
//     taskList.appendChild(taskItem);
//     document.getElementById("taskInput").value = "";

// })

document.getElementById("addTaskBtn").addEventListener("click", function () {
    console.log(document.getElementById("taskInput"));
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Toggle complete
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", function (e) {
            e.stopPropagation(); // prevent toggle
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});
