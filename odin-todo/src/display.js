import {rootProject, createProject, createItem} from './list.js';

const display = () => {

    for (const project in rootProject) {

        console.log(`${project}: ${rootProject[project]}`);

        for (const item of rootProject[project]) {

            console.log(item.title);
        }
    }

};

const append = (project) => {



};

const listen = () => {

    document.querySelector('.add-project').addEventListener('click', () => {
        

    });

};

export {display};