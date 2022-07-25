import {rootProject, createProject, createItem} from './list.js';

const display = () => {

    for (const project in rootProject) {

        console.log(`${project}: ${rootProject[project]}`);

        for (const item of rootProject[project]) {

            console.log(`${item.project}, ${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority}`);
        }
    }

    console.log('-------------------')
    console.log('');
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
        display();
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
        createProject(name.value);
        display();
        rePopulateProjectList(name.value);
        toggleModal();
        name.value = '';
    });

};



export {display, projectModal, taskModal};