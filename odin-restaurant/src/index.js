import {homeLoad, menuLoad, reserveLoad} from './page.js';

const header = document.createElement('div');
header.setAttribute('class', 'header');

const home = document.createElement('button');
home.setAttribute('class', 'home');
home.textContent = 'Home';
const menu = document.createElement('button');
menu.setAttribute('class', 'menu');
menu.textContent = 'Menu';
const reserve = document.createElement('button');
reserve.setAttribute('class', 'reserve');
reserve.textContent = 'Reserve';

header.appendChild(home);
header.appendChild(menu);
header.appendChild(reserve);

document.getElementById('bar').appendChild(header);

const content = document.getElementById('content');
homeLoad();

document.querySelector('.home').addEventListener('click', () => {

    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    homeLoad();

});

document.querySelector('.menu').addEventListener('click', () => {

    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    menuLoad();
    
});

document.querySelector('.reserve').addEventListener('click', () => {

    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
    reserveLoad();
    
});
