function addTask(columnId) {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;
    
    let div = document.createElement("div");
    div.textContent = taskText;
    div.style.padding = "5px";
    div.style.margin = "5px 0";
    div.style.background = "#eee";
    div.style.borderRadius = "5px";
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.onclick = function () { div.remove(); };
    
    div.appendChild(deleteBtn);
    document.getElementById(columnId).appendChild(div);
    input.value = "";
}