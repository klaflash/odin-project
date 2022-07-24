import {createProject, createItem} from './list.js';
import {display} from './display.js';

console.log('working');

createItem('root','Read', 'Talking to strangers', 'today', '12', 'high');

createProject('School');
createItem('School','CS373 Hw 1', 'Review slides and code', 'friday', '11', 'high');
display();
