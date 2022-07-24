import {rootProject} from './list.js';

const display = () => {

    for (const project in rootProject) {
        console.log(`${project}: ${rootProject[project]}`);
        console.log(rootProject[project].title);
        console.log(rootProject[project].description);
    }

};

export {display};