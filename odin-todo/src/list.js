//import {compareAsc} from 'date-fns';

const rootProject = { home: [] };
const taskArchive = [];
let sortedDateProject = {home : []};
let sortedPriorityProject = {home : []}; 

const createProject = (name, color) => {
  const temp = [];
  rootProject[name] = temp;
  temp.color = color;
};

const createItem = (project, title, description, dueDate, time, priority) => {
  const item = {};
  item.project = project;
  item.title = title;
  item.description = description;
  item.dueDate = dueDate;
  item.time = time;
  item.priority = priority;

  if (rootProject[project] === undefined) {
    rootProject[project] = [];
  }

  rootProject[project].push(item);
};

const appendArchive = (item) => {
  taskArchive.push(item);
};

export { rootProject, taskArchive, sortedDateProject, sortedPriorityProject, appendArchive, createProject, createItem };
