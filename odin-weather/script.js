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
        currentTemp: json.main.temp,
        feelsLike: json.main.feels_like,
        low: json.main.temp_min,
        high: json.main.temp_max,
        humidity: json.main.humidity,
        description: json.weather[0].description,
        wind: json.wind.speed
    }

    console.log(weather);
}

const listen = (() => {

    const go = document.getElementById('go');

    go.addEventListener('click', () => {

        const country = document.getElementById('country').value;
        const location = document.getElementById('location').value;

        getCordinates(country, location);

    });

})();


function dispay() {

}