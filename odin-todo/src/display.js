import {rootProject, createProject, createItem} from './list.js';

const display = () => {

    for (const project in rootProject) {

        console.log(`${project}: ${rootProject[project]}`);

        for (const item of rootProject[project]) {

            console.log(item.title);
        }
    }

};

const taskModal = () => {

};

const projectModal = () => {

    const modal = document.querySelector('.project-modal');
    const trigger = document.querySelector('.add-project');
    const close = document.querySelector('.close-button');
    const name = document.getElementById('project-name');
    const create = document.querySelector('.create-project-button')

    function toggleModal() {
        modal.classList.toggle('show-modal')
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener('click', toggleModal);
    close.addEventListener('click', toggleModal);
    window.addEventListener('click', windowOnClick);

    create.addEventListener('click', () => {
        createProject(name.value);
        display();
        toggleModal();
        name.value = '';
    });

};



export {display, projectModal};