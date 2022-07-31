import {
  rootProject,
  taskArchive,
  sortedDateProject,
  sortedPriorityProject,
  colorStorage,
  appendArchive,
  createProject,
  createItem,
  store,
} from './list.js';

import Calendar from 'tui-calendar'; /* ES6 */
import 'tui-calendar/dist/tui-calendar.css';

let currentSort = 'oldest';
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


const display = (page) => {
  const sortButtons = document.querySelector('.sort-buttons');
  sortButtons.style.display = 'block';

  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.textContent = '';

  const mainContainer = document.querySelector('.main-container');
  mainContainer.textContent = '';

  const title = document.createElement('div');
  title.setAttribute('class', 'project-title');
  if (page === 'home') {
    title.textContent = 'Tasks';
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
    const lineContainer = document.createElement('div');
    lineContainer.setAttribute('class', 'line-container');

    const projectTemp = document.createElement('div');
    projectTemp.setAttribute('class', 'project-name')
    const countTemp = document.createElement('div');
    countTemp.setAttribute('class', 'project-count');
    const deleteIcon = document.createElement('div');
    deleteIcon.setAttribute('class', 'delete-project');
    deleteIcon.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z"/></svg>';

    console.log(`${project}: ${obj[project].color} : ${obj[project]}`);

    let count = 0;
    for (const item of obj[project]) {
      if (item.project === page) {
        const taskContainer = document.createElement('div');
        taskContainer.setAttribute('class', 'task-container');

        const closeTaskCont = document.createElement('div');
        closeTaskCont.setAttribute('class', 'close-task-container');
        const closeTask = document.createElement('div');
        closeTask.setAttribute('class', 'close-task');
        closeTask.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>';

        closeTaskCont.appendChild(closeTask)

        const checkTask = document.createElement('div');
        checkTask.setAttribute('class', 'check-task');
        checkTask.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/></svg>';

        const taskTemp = document.createElement('div');
        taskTemp.setAttribute('class', 'task-middle');
        const taskTitle = document.createElement('div');
        taskTitle.setAttribute('class', 'task-title');
        taskTitle.textContent = item.title;
        const taskDescription = document.createElement('div');
        taskDescription.setAttribute('class', 'task-description');
        taskDescription.textContent = item.description;
        
        taskTemp.appendChild(taskTitle);
        taskTemp.appendChild(taskDescription);

        const taskFooter = document.createElement('div');
        taskFooter.setAttribute('class', 'task-footer');

        const footerDate = document.createElement('div');
        footerDate.setAttribute('class', 'footer-date');

        console.log(item.dueDate);
        //console.log(item.time);

        if(item.dueDate === '' && item.time != undefined) {
          item.dueDate = '1999-01-01';
        }

        const d = new Date(item.dueDate + " " + item.time);
  
        if (d.getFullYear() == '1999' && d.getMonth() == '0' && !isNaN(d.getHours())) {
            const suffix = d.getHours() <= 12 ? "PM":"AM"; 
            let hours = ((d.getTime() + 11) % 12 + 1);
            let minutes = d.getMinutes();
            if (minutes < 10) {
              minutes = '0' + minutes;
            }
            footerDate.textContent = `${hours}:${minutes} ${suffix}`;
        } else if (!isNaN(d.getDate()) && !isNaN(d.getMinutes())) {
            const suffix = d.getHours() <= 12 ? "PM":"AM"; 
            let hours = ((d.getTime() + 11) % 12 + 1);
            let minutes = d.getMinutes();
            if (minutes < 10) {
              minutes = '0' + minutes;
            }
            footerDate.textContent = `${monthNames[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} | ${hours}:${minutes} ${suffix}`;
        }

        const footerPriority = document.createElement('div');
        footerPriority.setAttribute('class', 'footer-priority');
        footerPriority.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5 21V4h9l.4 2H20v10h-7l-.4-2H7v7Zm7.5-11Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z"/></svg>';

        if (item.priority === 'low') {
          footerPriority.style.backgroundColor = 'lightblue';
        } else if (item.priority === 'medium') {
          footerPriority.style.backgroundColor = 'orange';
        } else if (item.priority === 'high') {
          footerPriority.style.backgroundColor = 'red'
        }

        taskFooter.appendChild(footerDate);
        taskFooter.appendChild(footerPriority);

        const middleCont = document.createElement('div');
        middleCont.setAttribute('class', 'middle-container');

        middleCont.appendChild(checkTask);
        middleCont.appendChild(taskTemp);

        taskContainer.appendChild(closeTaskCont);
        taskContainer.appendChild(middleCont);
        taskContainer.appendChild(taskFooter);
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

    console.log(obj[project].color);

    if (colorStorage[project] === undefined) {
      //projectTemp.style.backgroundColor = obj[project].color;
    } else {
      projectTemp.style.backgroundColor = colorStorage[project];
    }
    countTemp.textContent = count;
    lineContainer.appendChild(projectTemp);
    lineContainer.appendChild(countTemp);
    if (project != 'home') {
      lineContainer.appendChild(deleteIcon);
    }
    projectsContainer.appendChild(lineContainer);
    count = 0;
  }

  taskModal.clearProjectList();
  taskModal.populateProjectList();

  console.log('-------------------');
  console.log('');
};

const displayProjectPage = () => {
  const projectsArray = document.querySelector('.projects-container').children;

  for (const div of projectsArray) {
    div.firstChild.addEventListener('click', () => {
      display(div.firstChild.textContent);
      displayProjectPage();
    });

    if (div.firstChild.textContent != 'home') {
      const deleteTemp = div.querySelector('.delete-project');
      deleteTemp.addEventListener('click', () => {
        //console.log("clicked delete");
        deleteProject(div.firstChild.textContent);
      });
    }
  }
};

const deleteProject = (name) => {
  delete rootProject[name];
  taskModal.populateProjectList();
  store();
  display('home');
  displayProjectPage();
};

const taskModal = (() => {
  const modal = document.querySelector('.task-modal');
  const trigger = document.querySelector('.add-task');
  const close = document.querySelector('.close-task-button');
  const create = document.querySelector('.create-task-button');

  //input values
  const proj = document.getElementById('project-list');
  const name = document.getElementById('task-name');
  const description = document.getElementById('task-description');
  const date = document.getElementById('task-date');
  const time = document.getElementById('task-time');
  const priority = document.getElementById('task-priority');

  function toggleModal() {
    modal.classList.toggle('show-modal');
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  function clearProjectList() {
    const list = document.getElementById('project-list');
    list.textContent = '';
  }

  function populateProjectList() {
    //console.log('in');
    const list = document.getElementById('project-list');

    for (const project in rootProject) {
      //console.log(project);
      const temp = document.createElement('option');
      temp.value = project;
      temp.textContent = project;
      list.appendChild(temp);
    }
  }
  populateProjectList();

  trigger.addEventListener('click', toggleModal);
  close.addEventListener('click', toggleModal);
  window.addEventListener('click', windowOnClick);

  create.addEventListener('click', () => {
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
    proj.value = 'home';
    name.value = '';
    description.value = '';
    date.value = '';
    time.value = '';
    priority.value = 'low';
  });

  return { populateProjectList, clearProjectList };
})();

const projectModal = () => {
  const modal = document.querySelector('.project-modal');
  const trigger = document.querySelector('.add-project');
  const close = document.querySelector('.close-project-button');
  const name = document.getElementById('project-name');
  const color = document.getElementById('project-color');
  const create = document.querySelector('.create-project-button');

  function toggleModal() {
    modal.classList.toggle('show-modal');
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  function rePopulateProjectList(projectName) {
    const list = document.getElementById('project-list');

    const temp = document.createElement('option');
    temp.value = projectName;
    temp.textContent = projectName;
    list.appendChild(temp);
  }

  trigger.addEventListener('click', toggleModal);
  close.addEventListener('click', toggleModal);
  window.addEventListener('click', windowOnClick);

  create.addEventListener('click', () => {
    createProject(name.value, color.value);
    display(name.value);
    displayProjectPage();
    //rePopulateProjectList(name.value);
    toggleModal();
    name.value = '';
  });
};

const deleteTask = (project, item, div) => {
  div.addEventListener('click', () => {
    const index = rootProject[project].indexOf(item);
    rootProject[project].splice(index, 1);
    store();
    display(project);
    displayProjectPage();
  });
};

const checkOffTask = (project, item, div) => {
  div.addEventListener('click', () => {
    const index = rootProject[project].indexOf(item);
    rootProject[project].splice(index, 1);

    appendArchive(item);

    display(project);
    displayProjectPage();
  });
};

const viewTaskArchive = (() => {
  const archive = document.querySelector('.archive-button');

  archive.addEventListener('click', () => {
    const sortButtons = document.querySelector('.sort-buttons');
    sortButtons.style.display = 'none';

    const mainContainer = document.querySelector('.main-container');
    mainContainer.textContent = '';

    for (let i = taskArchive.length - 1; i >= 0; i--) {
      const item = taskArchive[i];

      const archiveRow = document.createElement('div');
      archiveRow.setAttribute('class', 'archive-row');

      const projectTemp = document.createElement('div');
      projectTemp.textContent = item.project;
      //console.log(item.color);
      projectTemp.style.backgroundColor = colorStorage[item.project];

      const taskTemp = document.createElement('div');

      const d = new Date(item.dueDate + " " + item.time);

      if (d.getFullYear() == '1999' && d.getMonth() == '0') {
        taskTemp.textContent = `${item.title}, ${item.description}, ${item.time}, ${item.priority} priority`;
      } else {
        taskTemp.textContent = `${item.title}, ${item.description}, ${item.dueDate}, ${item.time}, ${item.priority} priority`;
      }
      

      archiveRow.appendChild(projectTemp);
      archiveRow.appendChild(taskTemp);
      mainContainer.appendChild(archiveRow);
    }
  });
})();

const deleteProjectListener = (() => {
  const projectsArray = document.querySelector('.projects-container').children;

  document
    .querySelector('.delete-project-button')
    .addEventListener('click', () => {
      for (const div of projectsArray) {
        const x = div.lastChild;

        if (x.style.display === 'block') {
          x.style.display = 'none';
        } else {
          x.style.display = 'block';
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
    sortedDateProject[project].sort(function (a, b) {
      const dateA = new Date(a.dueDate + ' ' + a.time);
      //console.log(dateA);
      const dateB = new Date(b.dueDate + ' ' + b.time);
      //console.log(dateB);
      return dateA - dateB;
    });
  }
};

const sortByPriority = () => {
  sortedPriorityProject = structuredClone(rootProject);

  for (const project in sortedPriorityProject) {
    sortedPriorityProject[project].sort(function (a, b) {
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
    const mainContainer = document.querySelector('.main-container');
    mainContainer.textContent = '';

    const sortButtons = document.querySelector('.sort-buttons');
    sortButtons.style.display = 'none';

    const calDiv = document.createElement('div');
    calDiv.setAttribute('id', 'calendar');
    calDiv.style.height = '650px';

    const calButtons = document.createElement('div');
    calButtons.setAttribute('class', 'cal-buttons');

    const today = document.createElement('button');
    today.setAttribute('class', 'today');
    today.textContent = 'Today';

    const backWeek = document.createElement('button');
    backWeek.setAttribute('class', 'back-week');
    backWeek.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><path d="M23.375 30 13.333 19.958l10.042-10 1.958 1.959-8.041 8.041 8.041 8.084Z"/></svg>';

    const forwardWeek = document.createElement('button');
    forwardWeek.setAttribute('class', 'forward-week');
    forwardWeek.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30"><path d="m15.625 30-1.958-1.958 8.041-8.084-8.041-8.041 1.958-1.959 10.042 10Z"/></svg>';

    const monthView = document.createElement('button');
    monthView.setAttribute('class', 'month-view')
    monthView.textContent = 'Month View';

    const weekView = document.createElement('button');
    weekView.setAttribute('class', 'week-view');
    weekView.textContent = 'Week View';

    const monthTitle = document.createElement('div');
    monthTitle.setAttribute('class', 'month-title');

    calButtons.appendChild(today);
    calButtons.appendChild(backWeek);
    calButtons.appendChild(forwardWeek);
    calButtons.appendChild(monthView);
    calButtons.appendChild(weekView);
    calDiv.appendChild(calButtons);
    calDiv.appendChild(monthTitle);
    mainContainer.appendChild(calDiv);

    const calendar = new Calendar('#calendar', {
      defaultView: 'week',
      isReadOnly: true,
      week: {
        taskView: true,
        eventView: false,
      },
      template: {
        time(event) {
          const { start, end, title } = event;

          const color = event.color;

          let minutes = start._date.getMinutes();

          if (minutes === 0) {
            minutes = '00';
          }

          console.log(
            document.querySelector('.tui-full-calendar-time-schedule')
          );

          return `<div style="color: white;background-color: ${color}; margin-left:-3px;margin-top:-2px;padding-bottom:2px;padding-top:2px;padding-left:5px;">${start._date.getHours()}:${minutes} ${title}</div>`;
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

    const populateCalendar = () => {
      let count = 1;
      const events = [];

      for (const project in rootProject) {
        for (const item of rootProject[project]) {
          const tempEvent = {};
          tempEvent.id = count;
          tempEvent.calendarId = 1;
          tempEvent.title = item.title;
          
          tempEvent.dueDateClass = '';

          let d = new Date(item.dueDate + " " + item.time);
          if (d.getFullYear() == '1999' && d.getMonth() == '0') {
            tempEvent.category = 'allday'
          } else {
            tempEvent.category = 'time';
            tempEvent.start = d;
            tempEvent.end = d;
          }
          tempEvent.color = colorStorage[project];
          events.push(tempEvent);
          count++;
        }
      }

      calendar.createSchedules(events);
    };

    populateCalendar();

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

const logoListener = (() => {
  document.querySelector('.logo').addEventListener('click', () => {
    display('home');
  });
})();

export { display, projectModal, taskModal, displayProjectPage };
