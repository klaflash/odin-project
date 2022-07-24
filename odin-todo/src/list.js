const rootProject = {};
rootProject['root'] = {};

const createProject = (name) => {
    const temp = {};
    rootProject[name] = temp;
};

const createItem = (project, title, description, dueDate, time, priority) => {
    const item = {};
    item.project = project;
    item.title = title;
    item.description = description;
    item.dueDate = dueDate;
    item.time = time;
    item.priority = priority;

    rootProject[project] = item;
};

export {rootProject, createProject, createItem};