import p1 from '../src/photo1.jpg'
import p2 from '../src/photo2.jpg'

function homeLoad() {

    const main = document.createElement('div');
    main.setAttribute('class', 'container');
    
    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = 'La Carne';

    const photo = document.createElement('img');
    photo.setAttribute('id', 'photo-one');
    photo.src = p1;

    const photo2 = document.createElement('img');
    photo2.setAttribute('id', 'photo-two');
    photo2.src = p2;

    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');

    const text = document.createElement('div');
    text.setAttribute('class', 'text');
    text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    divider.appendChild(photo2);
    divider.appendChild(text);

    main.appendChild(title);
    main.appendChild(photo);
    main.appendChild(divider);


    const content = document.getElementById('content');
    
    content.appendChild(main);

};

function menuLoad() {

    const main = document.createElement('div');
    main.setAttribute('class', 'container');
    main.textContent = 'La Carne Steakhouse';

    const list = document.createElement('div');
    list.setAttribute('class', 'list');

    const drinks = document.createElement('h2');
    drinks.textContent = 'Drinks';
    const apps = document.createElement('h2');
    apps.textContent = 'Appetizers';
    const steaks = document.createElement('h2');
    steaks.textContent = 'Steaks';
    const sides = document.createElement('h2');
    sides.textContent = 'Sides';
    const deserts = document.createElement('h2');
    deserts.textContent = 'Deserts';


    //Add drinks to menu
    const drinkGrid = document.createElement('div');
    drinkGrid.setAttribute('class', 'grid');

    const drink1 = document.createElement('div');
    drink1.textContent = 'FIJI WATER 5'
    const drinkDes1 = document.createElement('div');
    drinkDes1.textContent = 'Sustainably collected from the purest source';
    drinkDes1.setAttribute('class', 'description');

    const drink2 = document.createElement('div');
    drink2.textContent = 'DOM PÉRIGNON 275'
    const drinkDes2 = document.createElement('div');
    drinkDes2.textContent = 'Bottle';
    drinkDes2.setAttribute('class', 'description');

    const drink3 = document.createElement('div');
    drink3.textContent = 'DRINK #3'
    const drinkDes3 = document.createElement('div');
    drinkDes3.textContent = 'Description';
    drinkDes3.setAttribute('class', 'description');

    const drink4 = document.createElement('div');
    drink4.textContent = 'DRINK #4'
    const drinkDes4 = document.createElement('div');
    drinkDes4.textContent = 'Description';
    drinkDes4.setAttribute('class', 'description');

    drink1.appendChild(drinkDes1);
    drink2.appendChild(drinkDes2);
    drink3.appendChild(drinkDes3);
    drink4.appendChild(drinkDes4);

    drinkGrid.appendChild(drink1);
    drinkGrid.appendChild(drink2);
    drinkGrid.appendChild(drink3);
    drinkGrid.appendChild(drink4);

    drinks.appendChild(drinkGrid);



    //Add apps to menu
    const appGrid = document.createElement('div');
    appGrid.setAttribute('class', 'grid');

    const app1 = document.createElement('div');
    app1.textContent = 'CRAB CAKES 24'
    const appDes1 = document.createElement('div');
    appDes1.textContent = 'Roasted red pepper & lime butter sauce';
    appDes1.setAttribute('class', 'description');

    const app2 = document.createElement('div');
    app2.textContent = 'SWEET CHILI CALAMARI 19'
    const appDes2 = document.createElement('div');
    appDes2.textContent = 'Lightly breaded, tossed with sweet chili sauce';
    appDes2.setAttribute('class', 'description');

    const app3 = document.createElement('div');
    app3.textContent = 'APPITIZER #3'
    const appDes3 = document.createElement('div');
    appDes3.textContent = 'Description';
    appDes3.setAttribute('class', 'description');

    const app4 = document.createElement('div');
    app4.textContent = 'APPITIZER #4'
    const appDes4 = document.createElement('div');
    appDes4.textContent = 'Description';
    appDes4.setAttribute('class', 'description');

    app1.appendChild(appDes1);
    app2.appendChild(appDes2);
    app3.appendChild(appDes3);
    app4.appendChild(appDes4);

    appGrid.appendChild(app1);
    appGrid.appendChild(app2);
    appGrid.appendChild(app3);
    appGrid.appendChild(app4);

    apps.appendChild(appGrid);


    //Add steaks to menu
    const steakGrid = document.createElement('div');
    steakGrid.setAttribute('class', 'grid');

    const steak1 = document.createElement('div');
    steak1.textContent = 'MAIN FILET MIGNON 58'
    const steakDes1 = document.createElement('div');
    steakDes1.textContent = 'Served with a choice of our signature butters';
    steakDes1.setAttribute('class', 'description');

    const steak2 = document.createElement('div');
    steak2.textContent = 'PRIME BONE-IN RIBEYE 66'
    const steakDes2 = document.createElement('div');
    steakDes2.textContent = 'Served with a choice of our signature butters';
    steakDes2.setAttribute('class', 'description');

    const steak3 = document.createElement('div');
    steak3.textContent = 'STEAK #3'
    const steakDes3 = document.createElement('div');
    steakDes3.textContent = 'Description';
    steakDes3.setAttribute('class', 'description');

    const steak4 = document.createElement('div');
    steak4.textContent = 'STEAK #4'
    const steakDes4 = document.createElement('div');
    steakDes4.textContent = 'Description';
    steakDes4.setAttribute('class', 'description');

    steak1.appendChild(steakDes1);
    steak2.appendChild(steakDes2);
    steak3.appendChild(steakDes3);
    steak4.appendChild(steakDes4);

    steakGrid.appendChild(steak1);
    steakGrid.appendChild(steak2);
    steakGrid.appendChild(steak3);
    steakGrid.appendChild(steak4);

    steaks.appendChild(steakGrid);


    //Add sides to menu
    const sideGrid = document.createElement('div');
    sideGrid.setAttribute('class', 'grid');

    const side1 = document.createElement('div');
    side1.textContent = 'CHIPOTLE CHEDDAR MAC & CHEESE 14'
    const sideDes1 = document.createElement('div');
    sideDes1.textContent = 'Descriptioncavatappi, smoked cheddar, chipotle panko breadcrumbs';
    sideDes1.setAttribute('class', 'description');

    const side2 = document.createElement('div');
    side2.textContent = 'BAKED POTATO PLAIN OR LOADED 13'
    const sideDes2 = document.createElement('div');
    sideDes2.textContent = 'cheddar, sour cream, bacon, butter, scallions';
    sideDes2.setAttribute('class', 'description');

    const side3 = document.createElement('div');
    side3.textContent = 'SIDE #3'
    const sideDes3 = document.createElement('div');
    sideDes3.textContent = 'Description';
    sideDes3.setAttribute('class', 'description');

    const side4 = document.createElement('div');
    side4.textContent = 'SIDE #4'
    const sideDes4 = document.createElement('div');
    sideDes4.textContent = 'Description';
    sideDes4.setAttribute('class', 'description');

    side1.appendChild(sideDes1);
    side2.appendChild(sideDes2);
    side3.appendChild(sideDes3);
    side4.appendChild(sideDes4);

    sideGrid.appendChild(side1);
    sideGrid.appendChild(side2);
    sideGrid.appendChild(side3);
    sideGrid.appendChild(side4);

    sides.appendChild(sideGrid);


    //Add deserts to menu
    const desertGrid = document.createElement('div');
    desertGrid.setAttribute('class', 'grid');
    desertGrid.setAttribute('id', 'last-grid');
    

    const desert1 = document.createElement('div');
    desert1.textContent = 'NEW YORK CHEESECAKE 16'
    const desertDes1 = document.createElement('div');
    desertDes1.textContent = 'Classic preparation, strawberry red wine sauce & fresh mint';
    desertDes1.setAttribute('class', 'description');

    const desert2 = document.createElement('div');
    desert2.textContent = 'CHOCOLATE GOOEY BUTTER CAKE 15'
    const desertDes2 = document.createElement('div');
    desertDes2.textContent = 'Honeycomb brittle, chocolate sauce & caramel';
    desertDes2.setAttribute('class', 'description');

    const desert3 = document.createElement('div');
    desert3.textContent = 'DESERT #3'
    const desertDes3 = document.createElement('div');
    desertDes3.textContent = 'Description';
    desertDes3.setAttribute('class', 'description');

    const desert4 = document.createElement('div');
    desert4.textContent = 'DESERT #4'
    const desertDes4 = document.createElement('div');
    desertDes4.textContent = 'Description';
    desertDes4.setAttribute('class', 'description');

    desert1.appendChild(desertDes1);
    desert2.appendChild(desertDes2);
    desert3.appendChild(desertDes3);
    desert4.appendChild(desertDes4);

    desertGrid.appendChild(desert1);
    desertGrid.appendChild(desert2);
    desertGrid.appendChild(desert3);
    desertGrid.appendChild(desert4);

    deserts.appendChild(desertGrid);



    list.appendChild(drinks);
    list.appendChild(apps);
    list.appendChild(steaks);
    list.appendChild(sides);
    list.appendChild(deserts);

    main.appendChild(list);
    

    const content = document.getElementById('content');
    
    content.appendChild(main);

};

function reserveLoad() {

    const main = document.createElement('div');
    main.setAttribute('class', 'container');
    main.setAttribute('id', 'number');
    main.textContent = 'Call (487)-739-4788 to reserve a table';
    const sub = document.createElement('div');
    sub.setAttribute('class', 'sub');
    sub.textContent = 'Online reservations coming soon...';
    
    main.appendChild(sub);

    const content = document.getElementById('content');
    
    content.appendChild(main);

};

export {homeLoad, menuLoad, reserveLoad};