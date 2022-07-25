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
                

                const taskTemp = document.createElement('div');
                taskTemp.textContent = `${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority} priority`;
                mainContainer.appendChild(taskTemp);
            }

            count++;

            console.log(`${item.project}, ${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority}`);
        }
        projectTemp.textContent = project;
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
        rePopulateProjectList(name.value);
        toggleModal();
        name.value = '';
    });

};



export {display, projectModal, taskModal, displayProjectPage};