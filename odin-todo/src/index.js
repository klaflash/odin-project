import {createProject, createItem} from './list.js';
import {display, projectModal, taskModal} from './display.js';

createItem('root','Read', 'Talking to strangers', 'today', '12', 'high');
createItem('Workout','Gym', 'Pull day', 'today', '9', 'high');

createProject('School');
createItem('School','CS373 Hw 1', 'Review slides and code', 'friday', '11', 'high');
createItem('School','CS348 Hw 2', 'Complete', 'thursday', '11', 'high');
display();

projectModal();
taskModal();
