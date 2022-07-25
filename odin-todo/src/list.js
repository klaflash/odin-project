const rootProject = {'root':[]};

const createProject = (name,color) => {
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

export {rootProject, createProject, createItem};