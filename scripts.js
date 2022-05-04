const inputForm = document.querySelector("form");
const inputInput = document.querySelector("input");
const divWrapper = document.querySelector(".listWrapper");
const btnRemove = document.createElement("div");
class oneTask {
    constructor() {
        this.text;
        this.classDone
    }
}

const App = function() {
    const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
    for (let i=0; i < WholeList.length; i++){
        const newDiv = document.createElement("div");
        const DivText = document.createElement("input");
        const btnDone = document.createElement("button");
        const btnEdit = document.createElement("button");
        const btnRemove = document.createElement("button");
        DivText.placeholder = WholeList[i].text;
        newDiv.setAttribute("id", i);
        DivText.readOnly = true;
        DivText.classList.add("inputText");
        if(WholeList[i].classDone){
            DivText.classList.add(WholeList[i].classDone)
        }
        btnDone.textContent = "done";
        btnEdit.textContent = "edit";
        btnRemove.textContent = "remove";
        newDiv.appendChild(DivText);
        newDiv.appendChild(btnDone);
        newDiv.appendChild(btnEdit);
        newDiv.appendChild(btnRemove);
        document.querySelector(".listWrapper").appendChild(newDiv);
        localStorage.setItem("ToDoList", JSON.stringify(WholeList));
        btnRemove.addEventListener("click", function(){
            const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
            newDiv.remove();
            WholeList.splice(this.parentElement.id, 1);
            for(let i = 0; i< document.querySelector(".listWrapper").children.length; i++){
                document.querySelector(".listWrapper").children[i].setAttribute("id", i);
            }
            localStorage.setItem("ToDoList", JSON.stringify(WholeList));
        });
        btnDone.addEventListener("click", function(){
            const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
            DivText.classList.toggle("btnDoneDone");
            if(WholeList[this.parentElement.id].classDone === "btnDoneDone"){
                WholeList[this.parentElement.id].classDone = "";
                localStorage.setItem("ToDoList", JSON.stringify(WholeList))
            }else{
                WholeList[this.parentElement.id].classDone = "btnDoneDone";
                localStorage.setItem("ToDoList", JSON.stringify(WholeList))
            }

        });
        btnEdit.addEventListener("click", function(){
            const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
            if(DivText.readOnly){
            DivText.readOnly = false;
            btnEdit.textContent = "save";
            }
            else{DivText.readOnly = true;
                btnEdit.textContent = "edit";
           }
           WholeList[this.parentElement.id].text = this.parentElement.firstChild.value;
           localStorage.setItem("ToDoList", JSON.stringify(WholeList))
        });
    }
    inputForm.addEventListener("submit", function(event){
        const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
        event.preventDefault();
        const newDiv = document.createElement("div");
        const DivText = document.createElement("input");
        const btnDone = document.createElement("button");
        const btnEdit = document.createElement("button");
        const btnRemove = document.createElement("button");
        const InputClass = new oneTask();
        InputClass.text = inputInput.value;
        WholeList.push(InputClass);
        localStorage.setItem("ToDoList", JSON.stringify(WholeList));
        newDiv.setAttribute("id",(WholeList.length -1).toString())
        DivText.placeholder = inputInput.value;
        DivText.readOnly = true;
        DivText.classList.add("inputText")
        btnDone.textContent = "done";
        btnEdit.textContent = "edit";
        btnRemove.textContent = "remove";
        newDiv.appendChild(DivText);
        newDiv.appendChild(btnDone);
        newDiv.appendChild(btnEdit);
        newDiv.appendChild(btnRemove);
        document.querySelector(".listWrapper").appendChild(newDiv);
        localStorage.setItem("ToDoList", JSON.stringify(WholeList));
        btnRemove.addEventListener("click", function(){
            const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
            newDiv.remove();
            WholeList.splice(this.parentElement.id, 1);
            for(let i = 0; i< document.querySelector(".listWrapper").children.length; i++){
                document.querySelector(".listWrapper").children[i].setAttribute("id", i);
            }
            localStorage.setItem("ToDoList", JSON.stringify(WholeList));
        });
        btnDone.addEventListener("click", function(){
            const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
            DivText.classList.toggle("btnDoneDone");
            if(WholeList[this.parentElement.id].classDone === "btnDoneDone"){
                WholeList[this.parentElement.id].classDone = "";
                localStorage.setItem("ToDoList", JSON.stringify(WholeList))
            }else{
                WholeList[this.parentElement.id].classDone = "btnDoneDone";
                localStorage.setItem("ToDoList", JSON.stringify(WholeList))
            }

        });
        btnEdit.addEventListener("click", function(){
            const WholeList = JSON.parse(localStorage.getItem("ToDoList"));
            if(DivText.readOnly){
            DivText.readOnly = false;
            btnEdit.textContent = "save";
            }
            else{DivText.readOnly = true;
                btnEdit.textContent = "edit";
            }
            WholeList[this.parentElement.id].text = this.parentElement.firstChild.value;
            localStorage.setItem("ToDoList", JSON.stringify(WholeList))
        });
        inputInput.value = ""
    })}

App();