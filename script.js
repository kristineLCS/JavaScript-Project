const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addPlanButton = document.getElementById("add-plan-button");

// adding new plans
addPlanButton.addEventListener('click', addPlan);
function addPlan() {
    // if(inputBox.value === " "){
    //     container.innerHTML = '<input type="text" id="input-box" placeholder="Add a new plan...">';
    // }

    const li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // the delete button
    const span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    inputBox.value = "";
    saveData()
}


// crossing out and deleting completed plan
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

// saving the list when tab is refreshed or is x out
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();


// Drag and Drop section
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `URL(${imgLink})`;
    imageView.textContent = " ";
    imageView.style.border = 0;
}

dropArea.addEventListener("dragover", function(e) {
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage()
});

// Add more drag and drop boxes
// const inputFiles = document.querySelector("#files");

// inputFiles.addEventListener("change", (e) => {
//     if(window.File && window.FileReader && window.FileList && window.Blob) {
//         const files = e.target.files;
//         const output = document.querySelector("#result");

//         for(let i = 0; i < files.length; i++){
//             if(!files[i].type.match("image")) continue;
//             const picReader = new FileReader();
//             picReader.addEventListener("load", function(event) {

//             })
//             picReader.readAsDataURL(files[i]);
//         }
//     } else {
//         alert("Your browser does not support the File API")
//     }
// })


