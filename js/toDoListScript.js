const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAll = document.getElementById("clearAll");

var task = "task";
var i = 0;
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    localStorage.setItem(task.concat(i), taskText);

    // La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et nouvelles lignes) au début et à la fin d'une chaîne.
    if (taskText !== "") {

        const listItem = document.createElement("li");
        taskList.appendChild(listItem);
        taskInput.value = "";

        // faire un div a linterrieur de la list afin dy mettre les buttons
        const listItemDiv = document.createElement("div")
        listItem.appendChild(listItemDiv)

        const taskValue = document.createElement("h1");
        taskValue.textContent = taskText;
        listItemDiv.appendChild(taskValue);

        // ajouter un boutton qui permet de finir une tache
        const finishBtn = document.createElement("button");
        finishBtn.textContent = "✔️";
        listItemDiv.appendChild(finishBtn);

        // methode pour classe une tache comme finie
        const parentOfinishBtn = finishBtn.parentNode
        const h1ToFinish = parentOfinishBtn.firstChild;
        finishBtn.addEventListener("click", () => {
            if (h1ToFinish.style.textDecoration === 'line-through') {
                h1ToFinish.style.textDecoration = '';
            } else {
                h1ToFinish.style.textDecoration = 'line-through';
            }
        });

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

        // Ajoutez un bouton de suppression à chaque élément de liste
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        listItemDiv.appendChild(deleteBtn);

        // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau nœud ou repositionner un nœud existant en tant que dernier enfant d'un nœud parent particulier.
        listItemDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {

            for (var i = 0; i < localStorage.length; i++) {
                const parentOfDeleteBtn = deleteBtn.parentNode
                const textOfValueToDelete = parentOfDeleteBtn.firstChild;

                // enlever la tache du local storage en utilisant le value et non le key
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                if (value === textOfValueToDelete.textContent) {
                    localStorage.removeItem(key);
                }
            };
            listItem.remove();
        });

    } else {
        alert("Veuillez entrer une tâche valide.");
    }
    i++;
}

// erase local storage
clearAll.addEventListener("click", () => {
    localStorage.clear()
    while (taskList.firstChild) {

        // Remove the first child element (the list item)
        taskList.removeChild(taskList.firstChild);
    }
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

const list = document.getElementById("list");

// method pour afficher chaque tache a faire stock dans To do list
function showSavedTasks() {
    const keyTask = "task0";
    var i = 0;

    //fouiller a travers chaque element du storage
    var tasks = Object.values(localStorage);
    tasks.forEach((task) => {
        localStorage.setItem(keyTask.concat(i), task);
        const listItem = document.createElement("li");
        list.appendChild(listItem);

        // faire un div a linterrieur de la list afin dy mettre les buttons
        const listItemDiv = document.createElement("div")
        listItem.appendChild(listItemDiv)

        const taskValue = document.createElement("h1");
        taskValue.textContent = task;
        listItemDiv.appendChild(taskValue);

        // ajouter un boutton qui permet de finir une tache
        const finishBtn = document.createElement("button");
        finishBtn.textContent = "✔️";
        listItemDiv.appendChild(finishBtn);

        // methode pour classe une tache comme finie
        const parentOfinishBtn = finishBtn.parentNode
        const h1ToFinish = parentOfinishBtn.firstChild;
        finishBtn.addEventListener("click", () => {
            if (h1ToFinish.style.textDecoration === 'line-through') {
                h1ToFinish.style.textDecoration = '';
            } else {
                h1ToFinish.style.textDecoration = 'line-through';
            }
        });

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

        // Ajoutez un bouton de suppression à chaque élément de liste
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✖";
        listItemDiv.appendChild(deleteBtn);

        // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau nœud ou repositionner un nœud existant en tant que dernier enfant d'un nœud parent particulier.
        listItemDiv.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {

            for (var i = 0; i < localStorage.length; i++) {
                const parentOfDeleteBtn = deleteBtn.parentNode
                const textOfValueToDelete = parentOfDeleteBtn.firstChild;

                // enlever la tache du local storage en utilisant le value et non le key
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                if (value === textOfValueToDelete.textContent) {
                    localStorage.removeItem(key);
                }
            };
            listItem.remove();
        });
    });
}