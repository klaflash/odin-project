//import {compareAsc} from 'date-fns';

let rootProject = JSON.parse(localStorage.getItem('rootProject')) || {
  home: [],
};
let taskArchive = JSON.parse(localStorage.getItem('taskArchive')) || [];
let sortedDateProject = { home: [] };
let sortedPriorityProject = { home: [] };
let colorStorage = JSON.parse(localStorage.getItem('colorStorage')) || {};

const store = () => {
  localStorage.setItem('rootProject', JSON.stringify(rootProject));
  localStorage.setItem('taskArchive', JSON.stringify(taskArchive));
  localStorage.setItem('colorStorage', JSON.stringify(colorStorage));
};

const createProject = (name, color) => {
  const temp = [];
  rootProject[name] = temp;
  colorStorage[name] = color;
  store();
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
  } else {
    item.color = rootProject[project].color;
  }

  rootProject[project].push(item);
  store();
};

const appendArchive = (item) => {
  taskArchive.push(item);
  store();
};

export {
  rootProject,
  taskArchive,
  sortedDateProject,
  sortedPriorityProject,
  colorStorage,
  appendArchive,
  createProject,
  createItem,
  store,
};
