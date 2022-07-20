function homeLoad() {

    const main = document.createElement('div');
    main.setAttribute('class', 'container');
    main.textContent = 'carni';

    const content = document.getElementById('content');
    
    content.appendChild(main);

};

function menuLoad() {

    const main = document.createElement('div');
    main.setAttribute('class', 'container');
    main.textContent = 'See our prices';

    const content = document.getElementById('content');
    
    content.appendChild(main);

};

function reserveLoad() {

    const main = document.createElement('div');
    main.setAttribute('class', 'container');
    main.textContent = 'Create a reservation';

    const content = document.getElementById('content');
    
    content.appendChild(main);

};

export {homeLoad, menuLoad, reserveLoad};