const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAll = document.getElementById("clearAll");

var task = "task";
var i = 0;
addTaskBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = taskInput.value.trim();
    // La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et nouvelles lignes) au début et à la fin d'une chaîne.
    if (taskText !== "") {

        const listItem = document.createElement("li");
        taskList.appendChild(listItem);
        taskInput.value = "";

        // faire un div a linterrieur de la list afin dy mettre les buttons
        const listItemDiv = document.createElement("div")
        listItem.appendChild(listItemDiv)

        const taskValue = document.createElement("h1");
        taskValue.innerHTML = taskText;
        listItemDiv.appendChild(taskValue);

        // Ajoutez un bouton de suppression à chaque élément de liste
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        listItemDiv.appendChild(deleteBtn);

        // ajouter un boutton qui permet de finir une tache
        const finishBtn = document.createElement("button");
        finishBtn.textContent = "✔️";
        listItemDiv.appendChild(finishBtn);

        // methode pour classe une tache comme finie
        

        // ajouter un bouton qui permet de mofifier une tache
        const modifyBtn = document.createElement("button");
        modifyBtn.textContent = "📝";
        listItemDiv.appendChild(modifyBtn);

        // methode pour modifier une tache deja existante
        const parentOfModifyBtn = modifyBtn.parentNode
        const h1ToModify = parentOfModifyBtn.firstChild;
        modifyBtn.addEventListener("click", () => {
            taskInput.value = h1ToModify.textContent
            listItem.remove()
        });

        // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau nœud ou repositionner un nœud existant en tant que dernier enfant d'un nœud parent particulier.
        listItemDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            listItem.remove()
        });

    } else {
        alert("Veuillez entrer une tâche valide.");
    }

    localStorage.setItem(task.concat(i), taskText);
    i++;
}

// erase local storage
clearAll.addEventListener("click", () => {
    localStorage.clear()
})

// method to display sidebar
const sidebarBtn = document.getElementById("sidebarBtn");

const sidebar = document.getElementById("sidebar");
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle('sidebarActive')
});

// method to hide sidebar
const closeSidebarBtn = document.getElementById("closeSidebarBtn");

const closeSidebar = document.getElementById("sidebar");
closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove('sidebarActive')
});
