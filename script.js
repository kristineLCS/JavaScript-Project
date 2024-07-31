// sidebar new plan button
// const sbPlanButton = document.getElementById('sb-Plan-Button');
// const memoryPlans = document.querySelector('.memoryplans')
// const sbPlanContainer = document.getElementById('sb-plan-container');

// sbPlanButton.addEventListener('click', sbPlanBtn);
// function sbPlanBtn() {
//     const buttonContainer = document.createElement('div');
//     buttonContainer.className = 'btncontainer';

//     const titleBar = document.createElement('input');
//     titleBar.className = 'titlebar';
//     titleBar.type = 'text';
//     titleBar.placeholder = 'Title...';

    // container for enter img button
    // const enterContainer = document.createElement('div');
    // enterContainer.className = 'entercontainer';
    // const enterButton = document.createElement('img');
    // enterButton.src = "enter-btn.png";
    // enterButton.alt = 'enter button';
    // enterButton.className = 'enterbutton';

    // container for edit and delete button for better CSS styling
    // const editDelete = document.createElement('div');
    // editDelete.className = 'editdelete';

    // container for edit img button
    // const editContainer = document.createElement('div');
    // editContainer.className = 'editcontainer';
    // const editButton = document.createElement('img');
    // editButton.src = "edit-title-btn.png";
    // editButton.alt = 'edit button';
    // editButton.className = 'editbutton';

    // container for edit img button
//     const deleteContainer = document.createElement('div');
//     deleteContainer.className = 'deletecontainer';
//     const deleteButton = document.createElement('img');
//     deleteButton.src = "delete-btn.png";
//     deleteButton.alt = 'delete button';
//     deleteButton.className = 'deletebutton';

//     enterContainer.appendChild(enterButton);
//     editContainer.appendChild(editButton);
//     deleteContainer.appendChild(deleteButton);

//     buttonContainer.appendChild(titleBar);
//     buttonContainer.appendChild(enterContainer);
//     editDelete.appendChild(editContainer);
//     editDelete.appendChild(deleteContainer);

//     sbPlanContainer.appendChild(buttonContainer);
//     sbPlanContainer.appendChild(editDelete);

// }

// save title placeholder
// const enterBtn = document.getElementById('enterbtn');
// const titleInput = document.getElementById('title-input');




// Show/Hide Sidebar
// const showSidebar = document.getElementById('showsidebar');
// const hideSidebar = document.getElementById('hidesidebar');
// const mySideBar = document.getElementById('mysidebar');
// const sideBar = document.querySelector('.sidebar');
// const newPlanBox = document.querySelector('.newplanbox');
// const nav = document.querySelector('nav');


// showSidebar.addEventListener('click', showSidebarBtn);
// function showSidebarBtn() {
//     mySideBar.style.width = '250px';
//     newPlanBox.style.width = '250px';
//     mySideBar.style.display = 'flex';
// }


// hideSidebar.addEventListener('click', hideSidebarBtn);
// function hideSidebarBtn() {
//     mySideBar.style.width = '0';
//     newPlanBox.style.width = '0';
//     mySideBar.style.display = 'none';
// }




// enterButton.addEventListener('click', enterBtn);
// function enterBtn() {
// write code for what the button is used for
// }

// function sbButtons() {
//     const enterButton = document.createElement('img');
//     enterButton.src = "enter-btn.png";
//     enterButton.alt = 'enter button';
//     enterButton.className = 'enterbutton';

//     const editButton = document.createElement('img');
//     editButton.src = "edit-title-btn.png";
//     editButton.alt = 'edit button';
//     editButton.className = 'editbutton';


//     sbPlanContainer.appendChild(enterButton);
//     sbPlanContainer.appendChild(editButton);

// }


// const dropPlanArea = document.createElement('div');
// dropPlanArea.className = 'drop-plan-area';
// dropPlanArea.dataset.index = index;

// const titleBar = document.createElement('input');
// titleBar.className = 'titlebar';
// titleBar.type = text;
// titleBar.placeholder = 'Title...';

// const enterButton = document.createElement('img');
// img.src = 'enter-btn.png';
// titleBar.appendChild(enterButton);

// enterButton.addEventListener('click', enterBtn); 
// function enterBtn() {

// }

// sbPlanContainer.appendChild(titleBar);

// sbPlanButton.addEventListener('click', () => {
//     const planIndex = document.querySelectorAll('.drop-plan-area').length;
    
// })



// create new li and add that new li to sbplancontainer
// sbPlanButton.addEventListener('click', sbPlanBtn);
// function sbPlanBtn() {
//     const sbPlanList = document.createElement('li');

//     const titleBar = document.createElement('input');
//     titleBar.type = 'text';
//     titleBar.placeholder = 'Title...';
//     titleBar.appendChild(sbPlanList);
//     titleBar.appendChild(sbPlanContainer);

//     const enterButton = document.createElement('button');
//     enterButton.type = 'button';
//     enterButton.innerHTML = 'URL{$'

//     const editButton = document.createElement('button');
//     const deleteButton = document.createElement('button');


//     sbPlanList.appendChild(memoryPlans);
//     sbPlanContainer.appendChild(sbPlanList);


// }

// adding new plans
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addPlanButton = document.getElementById("add-plan-button");

addPlanButton.addEventListener('click', addPlan);
function addPlan() {
    if (inputBox.value === '') {
        alert('Please enter a plan');
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        li.className = 'input-li';


        // the delete button
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        span.className = 'input-span';

    }  
    inputBox.value = '';
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
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('box-container');
    const addBoxButton = document.getElementById('add-box-button');

    const loadImages = () => {
        const savedData = JSON.parse(localStorage.getItem('savedImages')) || [];
        savedData.forEach((data, index) => {
            createDropArea(index, data.imgSrc, data.hidePlaceholders);
        });
    };

    const saveImages = () => {
        const data = Array.from(document.querySelectorAll('.drop-area')).map(dropArea => {
            const img = dropArea.querySelector('img');
            return {
                imgSrc: img.src,
                hidePlaceholders: dropArea.querySelector('p').style.display === 'none'
            };
        });
        localStorage.setItem('savedImages', JSON.stringify(data));
    };

    const createDropArea = (index, imgData = 'upload_image_logo.png', hidePlaceholders = false) => {
        const dropArea = document.createElement('div');
        dropArea.className = 'drop-area';
        dropArea.dataset.index = index;

        const closeButton = document.createElement('span');
        closeButton.innerHTML = "\u00d7";
        closeButton.setAttribute("class", "close-button");

        closeButton.addEventListener('click', function(e) {
            if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                saveImages();
            }
        });

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

        const spantext = document.createElement('span');
        spantext.textContent = 'Upload any images from device';
        spantext.setAttribute("class", "span-text");

        if (hidePlaceholders) {
            p.style.display = 'none';
            spantext.style.display = 'none';
        }

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
                    p.style.display = 'none';
                    spantext.style.display = 'none';
                    saveImages();
                };
                reader.readAsDataURL(file);
            }
        });

        dropArea.appendChild(closeButton);
        dropArea.appendChild(img);
        dropArea.appendChild(p);
        dropArea.appendChild(spantext);
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
                    p.style.display = 'none';
                    spantext.style.display = 'none';
                    saveImages();
                };
                reader.readAsDataURL(file);
            }
        });

        container.appendChild(dropArea);
    };

    addBoxButton.addEventListener('click', () => {
        const index = document.querySelectorAll('.drop-area').length;
        createDropArea(index);
        saveImages();
    });

    loadImages();
});

