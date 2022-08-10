const apiKey = '7f8dc9d4e9875a4f0152ae6e4ad44da0';

async function getData(cordinates) {

    try {
        const lat = cordinates[0];
        const lon = cordinates[1];
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units={imperial}`, {mode: 'cors'});
        const data = await response.json();
        console.log(data);
        process(data);
    } catch (err) {
        console.error(err);
    }

}

async function getCordinates(country, location) {

    try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${location},${country}&appid=${apiKey}`, {mode: 'cors'});
        const data = await response.json();
        const cordinates = [data.lat, data.lon];
        getData(cordinates);
        console.log(cordinates);
    } catch (err) {
        console.error(err);
    }
    
}

function process(json) {

    let weather = {
        currentTemp: kelvinToF(json.main.temp),
        feelsLike: kelvinToF(json.main.feels_like),
        low: kelvinToF(json.main.temp_min),
        high: kelvinToF(json.main.temp_max),
        humidity: json.main.humidity,
        description: json.weather[0].description,
        wind: Math.round(json.wind.speed * 2.237),
        name: json.name
    }

    console.log(weather);
    dispay(weather);
}

function kelvinToF(k) {
    return Math.round((k - 273.15) * (9/5) + 32);
}

const listen = (() => {

    const go = document.getElementById('go');

    go.addEventListener('click', () => {

        const country = document.getElementById('country').value;
        const location = document.getElementById('location').value;

        getCordinates(country, location);

    });

})();


function dispay(obj) {


    const container = document.querySelector('.container');

    const main = document.createElement('div');
    main.setAttribute('class', 'main');

    const name = document.createElement('div');
    name.textContent = obj.name;
    const cTemp = document.createElement('div');
    cTemp.textContent = obj.currentTemp;
    const description = document.createElement('div');
    description.textContent = obj.description;

    const hl = document.createElement('div');
    hl.setAttribute('class', 'hl');
    const high = document.createElement('div');
    high.textContent = `H:${obj.high}`;
    const low = document.createElement('div');
    low.textContent = `L:${obj.low}`;
    hl.appendChild(high);
    hl.appendChild(low);

    main.appendChild(name);
    main.appendChild(cTemp);
    main.appendChild(description);
    main.appendChild(hl);

    const feel = document.createElement('div');
    feel.setAttribute('class', 'feel');
    feel.textContent = `Feels like ${obj.feelsLike}`;

    const humidity = document.createElement('div');
    humidity.setAttribute('class', 'humidity');
    humidity.textContent = `${obj.humidity}% humidity`;

    const wind = document.createElement('div');
    wind.setAttribute('class', 'wind');
    wind.textContent = `Wind ${obj.wind} mph`;

    container.appendChild(main);
    container.appendChild(feel);
    container.appendChild(humidity);
    container.appendChild(wind);
}