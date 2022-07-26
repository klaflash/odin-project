import {rootProject, createProject, createItem} from './list.js';

const display = (page) => {

    const projectsContainer = document.querySelector('.projects-container');
    projectsContainer.textContent = '';

    const mainContainer = document.querySelector('.main-container');
    mainContainer.textContent = '';

    if (page === 'root') {
        const title = document.createElement('div');
        title.textContent = "Tasks";
        mainContainer.appendChild(title);
    } else {
        const title = document.createElement('div');
        title.textContent = page;
        mainContainer.appendChild(title);
    }


    for (const project in rootProject) {

        const lineContainer = document.createElement('div');
        lineContainer.setAttribute('class', 'line-container');

        const projectTemp = document.createElement('div');
        const countTemp = document.createElement('span');
        
        console.log(`${project}: ${rootProject[project].color} : ${rootProject[project]}`);

        let count = 0;
        for (const item of rootProject[project]) {

            if (item.project === page) {

                const taskContainer = document.createElement('div');
                taskContainer.setAttribute('class', 'task-container');
                
                const closeTask = document.createElement('div');
                closeTask.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>'

                const checkTask = document.createElement('div');
                checkTask.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/></svg>'

                const taskTemp = document.createElement('div');
                taskTemp.textContent = `${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority} priority`;

                taskContainer.appendChild(checkTask);
                taskContainer.appendChild(taskTemp);
                taskContainer.appendChild(closeTask);
                mainContainer.appendChild(taskContainer);

                deleteTask(item.project, item, closeTask);
                checkOffTask(item.project, item, checkTask);
            }

            count++;

            console.log(`${item.project}, ${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority}`);
        }
        projectTemp.textContent = project;
        projectTemp.style.backgroundColor = rootProject[project].color;
        countTemp.textContent = count;
        lineContainer.appendChild(projectTemp);
        lineContainer.appendChild(countTemp);
        projectsContainer.appendChild(lineContainer);
        count = 0;
    }

    console.log('-------------------')
    console.log('');
};

const displayProjectPage = () => {

    const projectsArray = document.querySelector('.projects-container').children;
    
    for (const div of projectsArray) {
        div.addEventListener('click', () => {
            display(div.firstChild.textContent);
            displayProjectPage();
        });
    }
};

const taskModal = () => {
    const modal = document.querySelector('.task-modal');
    const trigger = document.querySelector('.add-task');
    const close = document.querySelector('.close-task-button');
    const create = document.querySelector('.create-task-button');

    //input values
    const proj = document.getElementById('project-list');
    const name = document.getElementById('task-name');
    const description = document.getElementById('task-description');
    const date = document.getElementById('task-date');
    const time = document.getElementById('task-time');
    const priority = document.getElementById('task-priority');

    function toggleModal() {
        modal.classList.toggle('show-modal')
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    function populateProjectList() {
        const list = document.getElementById('project-list');

        for (const project in rootProject) {
            if (project != 'root') {
                const temp = document.createElement('option');
                temp.value = project;
                temp.textContent = project;
                list.appendChild(temp);
            }
        }
    };
    populateProjectList();

    trigger.addEventListener('click', toggleModal);
    close.addEventListener('click', toggleModal);
    window.addEventListener('click', windowOnClick);

    create.addEventListener('click', () => {

        createItem(proj.value, name.value, description.value, date.value, time.value, priority.value);
        display(proj.value);
        displayProjectPage();
        toggleModal();
        proj.value = 'root';
        name.value = '';
        description.value = '';
        date.value = '';
        time.value = '';
        priority.value = 'low';

    });
};

const projectModal = () => {

    const modal = document.querySelector('.project-modal');
    const trigger = document.querySelector('.add-project');
    const close = document.querySelector('.close-project-button');
    const name = document.getElementById('project-name');
    const color = document.getElementById('project-color');
    const create = document.querySelector('.create-project-button');

    function toggleModal() {
        modal.classList.toggle('show-modal')
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    function rePopulateProjectList(projectName) {
        const list = document.getElementById('project-list');

        const temp = document.createElement('option');
        temp.value = projectName;
        temp.textContent = projectName;
        list.appendChild(temp);
    };

    trigger.addEventListener('click', toggleModal);
    close.addEventListener('click', toggleModal);
    window.addEventListener('click', windowOnClick);

    create.addEventListener('click', () => {
        createProject(name.value, color.value);
        display(name.value);
        displayProjectPage();
        rePopulateProjectList(name.value);
        toggleModal();
        name.value = '';
    });

};

const deleteTask = (project, item, div) => {

    div.addEventListener('click', () => {
        const index = rootProject[project].indexOf(item);
        rootProject[project].splice(index, 1);
        display(project);
        displayProjectPage();
    });

};

const checkOffTask = (project, item, div) => {

    div.addEventListener('click', () => {
        const index = rootProject[project].indexOf(item);
        rootProject[project].splice(index, 1);

        archiveTask();

        display(project);
        displayProjectPage();
    });

};

const archiveTask = () => {

};


export {display, projectModal, taskModal, displayProjectPage};