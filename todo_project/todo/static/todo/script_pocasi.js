const apiKey = 'ceb7c9609bc251b37fda2d9ccad58d05'; // Joseff Pavlicek Key
async function getWeather(cityName = null) {
    const cityInput = document.getElementById('cityInput')
    const city = cityName || cityInput.value;
    if (!city) {
        alert('Please enter a city!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Město nenalezeno nebo chyba připojení.');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p class="text-danger">${error.message}</p>`;
    }
}

function displayWeather(data) {
    console.log("my data "+JSON.stringify(data,null,2));
    const myDataInput = JSON.stringify(data,null,2);
    const { name, main, weather, wind } = data;
    const weatherHtml = `
        <h3>${name}</h3>
        <p><strong>Teplota:</strong> ${main.temp}°C</p>
        <p><strong>Pocitová teplota:</strong> ${main.feels_like}°C</p>
        <p><strong>Počasí:</strong> ${weather[0].description}</p>
        <p><strong>Tlak: </strong>${main.pressure}</p>
        <p><strong>Rychlost větru: </strong>${wind.speed}</p>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="Weather Icon">
    `;

    document.getElementById('weatherResult').innerHTML = weatherHtml;
    document.getElementById('dataInput').innerHTML = myDataInput;
}

window.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    cityInput.value = 'České Budějovice'; // Default city
    getWeather("České Budějovice");
});
