import {
  rootProject,
  taskArchive,
  sortedDateProject,
  sortedPriorityProject,
  appendArchive,
  createProject,
  createItem,
} from "./list.js";


import Calendar from 'tui-calendar'; /* ES6 */
import "tui-calendar/dist/tui-calendar.css";
//var Calendar = window.tui.Calendar;
//const Calendar = require('@toast-ui/calendar');
//require('@toast-ui/calendar/dist/toastui-calendar.min.css');

let currentSort = 'oldest';

const display = (page) => {
  const sortButtons = document.querySelector('.sort-buttons');
  sortButtons.style.display = 'block';
  
  const projectsContainer = document.querySelector(".projects-container");
  projectsContainer.textContent = "";

  const mainContainer = document.querySelector(".main-container");
  mainContainer.textContent = "";

  const title = document.createElement("div");
  title.setAttribute('class', 'project-title');
  if (page === "home") {
    title.textContent = "Tasks";
    mainContainer.appendChild(title);
  } else {
    title.textContent = page;
    mainContainer.appendChild(title);
  }

  let obj;

  if (currentSort === 'oldest') {
    obj = rootProject;
  } else if (currentSort === 'date') {
    sortByDate();
    obj = sortedDateProject;
  } else if (currentSort === 'priority') {
    sortByPriority();
    obj = sortedPriorityProject;
  } else {
    obj = rootProject;
  }


  for (const project in obj) {
    const lineContainer = document.createElement("div");
    lineContainer.setAttribute("class", "line-container");

    const projectTemp = document.createElement("div");
    const countTemp = document.createElement("div");
    const deleteIcon = document.createElement("div");
    deleteIcon.setAttribute("class", "delete-project");
    deleteIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z"/></svg>';

    console.log(
      `${project}: ${obj[project].color} : ${obj[project]}`
    );

    let count = 0;
    for (const item of obj[project]) {
      if (item.project === page) {
        const taskContainer = document.createElement("div");
        taskContainer.setAttribute("class", "task-container");

        const closeTask = document.createElement("div");
        closeTask.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>';

        const checkTask = document.createElement("div");
        checkTask.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/></svg>';

        const taskTemp = document.createElement("div");
        taskTemp.textContent = `${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority} priority`;

        taskContainer.appendChild(checkTask);
        taskContainer.appendChild(taskTemp);
        taskContainer.appendChild(closeTask);
        mainContainer.appendChild(taskContainer);

        deleteTask(item.project, item, closeTask);
        checkOffTask(item.project, item, checkTask);
      }

      count++;

      console.log(
        `${item.project}, ${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority}`
      );
    }
    projectTemp.textContent = project;

    if (obj[project].color === undefined) {
      projectTemp.style.backgroundColor = obj[project].color;
    } else {
      projectTemp.style.backgroundColor = obj[project].color;
    }
    countTemp.textContent = count;
    lineContainer.appendChild(projectTemp);
    lineContainer.appendChild(countTemp);
    if (project != "home") {
      lineContainer.appendChild(deleteIcon);
    }
    projectsContainer.appendChild(lineContainer);
    count = 0;
  }

  console.log("-------------------");
  console.log("");
};

const displayProjectPage = () => {
  const projectsArray = document.querySelector(".projects-container").children;

  for (const div of projectsArray) {
    div.firstChild.addEventListener("click", () => {
      display(div.firstChild.textContent);
      displayProjectPage();
    });

    if (div.firstChild.textContent != "home") {
      const deleteTemp = div.querySelector(".delete-project");
      deleteTemp.addEventListener("click", () => {
        console.log("clicked delete");
        deleteProject(div.firstChild.textContent);
      });
    }
  }
};

const deleteProject = (name) => {
  delete rootProject[name];
  taskModal.populateProjectList();
  display("home");
  displayProjectPage();
};

const taskModal = (() => {
  const modal = document.querySelector(".task-modal");
  const trigger = document.querySelector(".add-task");
  const close = document.querySelector(".close-task-button");
  const create = document.querySelector(".create-task-button");

  //input values
  const proj = document.getElementById("project-list");
  const name = document.getElementById("task-name");
  const description = document.getElementById("task-description");
  const date = document.getElementById("task-date");
  const time = document.getElementById("task-time");
  const priority = document.getElementById("task-priority");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  function populateProjectList() {
    const list = document.getElementById("project-list");

    for (const project in rootProject) {
      if (project != "home") {
        const temp = document.createElement("option");
        temp.value = project;
        temp.textContent = project;
        list.appendChild(temp);
      }
    }
  }
  populateProjectList();

  trigger.addEventListener("click", toggleModal);
  close.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

  create.addEventListener("click", () => {
    createItem(
      proj.value,
      name.value,
      description.value,
      date.value,
      time.value,
      priority.value
    );
    display(proj.value);
    displayProjectPage();
    toggleModal();
    proj.value = "home";
    name.value = "";
    description.value = "";
    date.value = "";
    time.value = "";
    priority.value = "low";
  });

  return {populateProjectList};
})();

const projectModal = () => {
  const modal = document.querySelector(".project-modal");
  const trigger = document.querySelector(".add-project");
  const close = document.querySelector(".close-project-button");
  const name = document.getElementById("project-name");
  const color = document.getElementById("project-color");
  const create = document.querySelector(".create-project-button");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  function rePopulateProjectList(projectName) {
    const list = document.getElementById("project-list");

    const temp = document.createElement("option");
    temp.value = projectName;
    temp.textContent = projectName;
    list.appendChild(temp);
  }

  trigger.addEventListener("click", toggleModal);
  close.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

  create.addEventListener("click", () => {
    createProject(name.value, color.value);
    display(name.value);
    displayProjectPage();
    rePopulateProjectList(name.value);
    toggleModal();
    name.value = "";
  });
};

const deleteTask = (project, item, div) => {
  div.addEventListener("click", () => {
    const index = rootProject[project].indexOf(item);
    rootProject[project].splice(index, 1);
    display(project);
    displayProjectPage();
  });
};

const checkOffTask = (project, item, div) => {
  div.addEventListener("click", () => {
    const index = rootProject[project].indexOf(item);
    rootProject[project].splice(index, 1);

    appendArchive(item);

    display(project);
    displayProjectPage();
  });
};

const viewTaskArchive = (() => {
  const archive = document.querySelector(".archive-button");

  archive.addEventListener("click", () => {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.textContent = "";

    for (let i = taskArchive.length - 1; i >= 0; i--) {
      const item = taskArchive[i];

      const archiveRow = document.createElement("div");
      archiveRow.setAttribute("class", "archive-row");

      const projectTemp = document.createElement("div");
      projectTemp.textContent = item.project;
      projectTemp.style.backgroundColor = rootProject[item.project].color;

      const taskTemp = document.createElement("div");
      taskTemp.textContent = `${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority} priority`;

      archiveRow.appendChild(projectTemp);
      archiveRow.appendChild(taskTemp);
      mainContainer.appendChild(archiveRow);
    }
  });
})();

const deleteProjectListener = (() => {
  const projectsArray = document.querySelector(".projects-container").children;

  document
    .querySelector(".delete-project-button")
    .addEventListener("click", () => {
      for (const div of projectsArray) {
        const x = div.lastChild;

        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    });
})();

const sortOldestListener = (() => {

  document.querySelector('.sort-oldest').addEventListener('click', () => {
    currentSort = 'oldest';

    let title = document.querySelector('.project-title').textContent;

    if (title === 'Tasks') {
      title = 'home';
    }

    display(title);
    displayProjectPage();
  });

})();

const sortDateListener = (() => {

  document.querySelector('.sort-date').addEventListener('click', () => {
    currentSort = 'date';

    let title = document.querySelector('.project-title').textContent;

    if (title === 'Tasks') {
      title = 'home';
    }

    display(title);
    displayProjectPage();
  });

})();

const sortPriorityListener = (() => {

  document.querySelector('.sort-priority').addEventListener('click', () => {
    currentSort = 'priority';

    let title = document.querySelector('.project-title').textContent;

    if (title === 'Tasks') {
      title = 'home';
    }

    display(title);
    displayProjectPage();
  });

})();

const sortByDate = () => {
  sortedDateProject = structuredClone(rootProject);

  for (const project in sortedDateProject) {
    
    sortedDateProject[project].sort(function(a,b) {
      const dateA = new Date(a.dueDate + ' ' + a.time);
      console.log(dateA);
      const dateB = new Date(b.dueDate + ' ' + b.time);
      console.log(dateB);
      return dateA - dateB;
    });
  }

};

const sortByPriority = () => {
  sortedPriorityProject = structuredClone(rootProject);

  for (const project in sortedPriorityProject) {
    
    sortedPriorityProject[project].sort(function(a,b) {
      let priorityA = a.priority;
      let priorityB = b.priority;

      if (priorityA === undefined) {
        priorityA = 3;
      } else if (priorityA === 'low') {
        priorityA = 2;
      } else if (priorityA === 'medium') {
        priorityA = 1;
      } else if (priorityA === 'high') {
        priorityA = 0;
      }

      if (priorityB === undefined) {
        priorityB = 3;
      } else if (priorityB === 'low') {
        priorityB = 2;
      } else if (priorityB === 'medium') {
        priorityB = 1;
      } else if (priorityB === 'high') {
        priorityB = 0;
      }

      return priorityA - priorityB;
    });
  }

};

const viewCalendar = (() => {

  const calendar = document.querySelector('.calendar-button');

  calendar.addEventListener('click', () => {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.textContent = "";

    const sortButtons = document.querySelector('.sort-buttons');
    sortButtons.style.display = 'none';

    const calDiv = document.createElement('div');
    calDiv.setAttribute('id', 'calendar');
    calDiv.style.height = '700px';

    const today = document.createElement('button');
    today.textContent = 'Today';

    const backWeek = document.createElement('button');
    backWeek.textContent = 'Back';

    const forwardWeek = document.createElement('button');
    forwardWeek.textContent = 'Forward'

    const monthView = document.createElement('button');
    monthView.textContent = 'Month View';

    const weekView = document.createElement('button');
    weekView.textContent = 'Week View';

    const monthTitle = document.createElement('div');
    monthTitle.setAttribute('class', 'month-title');

    calDiv.appendChild(today);
    calDiv.appendChild(backWeek);
    calDiv.appendChild(forwardWeek);
    calDiv.appendChild(monthView);
    calDiv.appendChild(weekView);
    calDiv.appendChild(monthTitle);
    mainContainer.appendChild(calDiv);


    const calendar = new Calendar('#calendar', {
      defaultView: 'month',
      isReadOnly: true,
      week: {
        taskView: true,
        eventView: false,
      },
      template: {
        time(event) {
          const { start, end, title } = event;
    
          return `<span style="color: white;">${formatTime(start)}~${formatTime(end)} ${title}</span>`;
        },
        allday(event) {
          return `<span style="color: gray;">${event.title}</span>`;
        },
      },
      calendars: [
        {
          id: 'cal1',
          name: 'Personal',
          backgroundColor: '#03bd9e',
        },
        {
          id: 'cal2',
          name: 'Work',
          backgroundColor: '#00a9ff',
        },
      ],
    });


    today.addEventListener('click', () => {
      calendar.today();
      setMonthTitle();
    });

    backWeek.addEventListener('click', () => {
      calendar.move(-1);
      calendar.render();
      setMonthTitle();
    });

    forwardWeek.addEventListener('click', () => {
      calendar.move(1);
      calendar.render();
      setMonthTitle();
    });

    monthView.addEventListener('click', () => {
      calendar.changeView('month');
      setMonthTitle();
    });

    weekView.addEventListener('click', () => {
      calendar.changeView('week');
      setMonthTitle();
    });

    const setMonthTitle = () => {

      const month = calendar.getDate().getMonth();
      const year = calendar.getDate().getFullYear();
      
      switch (month) {
        case 0:
          monthTitle.textContent = `January ${year}`;
          break;
        case 1:
          monthTitle.textContent = `Feburary ${year}`;
          break;
        case 2:
          monthTitle.textContent = `March ${year}`;
          break;
        case 3:
          monthTitle.textContent = `April ${year}`;
          break;
        case 4:
          monthTitle.textContent = `May ${year}`;
          break;
        case 5:
          monthTitle.textContent = `June ${year}`;
          break;
        case 6:
          monthTitle.textContent = `July ${year}`;
          break;
        case 7:
          monthTitle.textContent = `August ${year}`;
          break;
        case 8:
          monthTitle.textContent = `September ${year}`;
          break;
        case 9:
          monthTitle.textContent = `October ${year}`;
          break;
        case 10:
          monthTitle.textContent = `November ${year}`;
          break;
        case 11:
          monthTitle.textContent = `December ${year}`;
      }
    };

    setMonthTitle();


    

  });
  
})();

export { display, projectModal, taskModal, displayProjectPage };
