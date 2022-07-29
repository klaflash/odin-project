import { createProject, createItem } from './list.js';
import {
  display,
  projectModal,
  taskModal,
  displayProjectPage,
} from './display.js';

//createItem("home", "Read", "Talking to strangers", new Date(2022,6,27,10), "12", "high");
//createItem("Workout", "Gym", "Pull day", new Date(2022,6,27,5), "9", "high");
//createProject("School");
//createItem("School", "CS373 Hw 1","Review slides and code",new Date(2022,6,28,10),"11","high");
//createItem("School", "CS348 Hw 2", "Complete", new Date(2022,6,27,8), "11", "high");

display('home');
displayProjectPage();

projectModal();

//css
