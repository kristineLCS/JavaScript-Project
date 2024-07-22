// Nav/Side Bar
function closeSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';  
}
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';   
}


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
// const dropArea = document.getElementById("drop-area");
// const inputFile = document.getElementById("input-file");
// const imageView = document.getElementById("img-view");

// inputFile.addEventListener("change", uploadImage);

// function uploadImage(){
//     let imgLink = URL.createObjectURL(inputFile.files[0]);
//     imageView.style.backgroundImage = `URL(${imgLink})`;
//     imageView.textContent = " ";
//     imageView.style.border = 0;
// }

// dropArea.addEventListener("dragover", function(e) {
//     e.preventDefault();
// });

// dropArea.addEventListener("drop", function(e) {
//     e.preventDefault();
//     inputFile.files = e.dataTransfer.files;
//     uploadImage()
// });

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

// document.getElementById('add-box-button').addEventListener('click', addNewBox);

// function addNewBox() {
//     const newBox = document.createElement('div');
//     newBox.className = 'box';
//     newBox.textContent = "Drag and Drop or Click here to upload image";

//     const container = document.getElementById('hero');
//     container.appendChild(newBox);

//     optional: removes "No boxes yet" when new boxes are added
//     const noBoxesParagraph = container.querySelector('p');
//     if (noBoxesParagraph) {
//         container.removeChild(noBoxesParagraph);
//     }
// }


// try out
// let dropAreaIndex = 1; //??

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('box-container');
    const addBoxButton = document.getElementById('add-box-button');

    const loadImages = () => {
        const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
        savedImages.forEach((imgData, index) => {
            createDropArea(index, imgData);
        });
    };

    const saveImages = () => {
        const images = Array.from(document.querySelectorAll('.drop-area img')).map(img => img.src);
        localStorage.setItem('savedImages', JSON.stringify(images));
    };

    const createDropArea = (index, imgData = 'upload_image_logo.png') => {
        // const dropAreaContainer = document.createElement('div');
        // dropAreaContainer.setAttribute = ('class', 'drop-area-container');
        const dropArea = document.createElement('div');
        dropArea.className = 'drop-area';
        dropArea.dataset.index = index;

        // delete drag and drop box
        const closeButton = document.createElement('span');
        closeButton.innerHTML = "\u00d7";
        closeButton.setAttribute("class", "close-button");

        closeButton.addEventListener('click', function(e){
            if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove();
                saveImages();
            }
        });

        // stopPropagation() stops triggering the click event for the drag-and-drop area when "x" is clicked
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation();
            dropArea.remove();
            saveImages();
        });

        const img = document.createElement('img');
        img.src = imgData;
        img.alt = 'upload image';

        const p = document.createElement('p');
        p.textContent = 'Drag and Drop or Click here to upload image';

        const span = document.createElement('span');
        span.textContent = 'Upload any images from device';

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.hidden = true;
        input.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    img.src = e.target.result;
                    saveImages();
                };
                reader.readAsDataURL(file);
            }
        });

        dropArea.appendChild(closeButton);
        dropArea.appendChild(img);
        dropArea.appendChild(p);
        dropArea.appendChild(span);
        dropArea.appendChild(input);

        dropArea.addEventListener('click', () => input.click());
        dropArea.addEventListener('dragover', (event) => {
            event.preventDefault();
            dropArea.classList.add('dragover');
        });

        dropArea.addEventListener('dragleave', () => {
            dropArea.classList.remove('dragover');
        });

        dropArea.addEventListener('drop', (event) => {
            event.preventDefault();
            dropArea.classList.remove('dragover');

            const file = event.dataTransfer.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    img.src = e.target.result;
                    saveImages();
                };
                reader.readAsDataURL(file);
            }
        });

        container.appendChild(dropArea);

            // optional: removes "No boxes yet" when new boxes are added
            // input.type = 'file';
            // const file = event.target.files[0];
            // const removePara = container.querySelector('p');
            // if (file) {
            //     span.textContent = " ";
            //     p.textContent = " ";
            // }
    };

    addBoxButton.addEventListener('click', () => {
        const index = document.querySelectorAll('.drop-area').length;
        createDropArea(index);
        saveImages();
    });

    loadImages();
});