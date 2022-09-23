let image = document.querySelector('.icon');
let temperature = document.querySelector('.temp')
let celcius = document.querySelector('.celcius');
let fahrenhiet = document.querySelector('.fahrenhiet');
let details = document.querySelectorAll('.details ul li');
let city = document.querySelector('.bottom h2');
let date = document.querySelectorAll('.bottom p');
let response, data;

gettingData('india');

let location1 = document.querySelector('#search-text');
const form = document.getElementById('search_form');

// searchBtn.addEventListener('click', () => {
//     gettingData(location1.value);
// });

form.addEventListener('submit', (event) => {
    event.preventDefault();
    gettingData(location1.value);
});

async function gettingData(location) {
    response = await fetch(`http://api.weatherapi.com/v1/current.json?key=3c5991c6a61248c98d962251221909 &q=${location}&aqi=no`)
    data = await response.json();
    image.src = data.current.condition.icon;
    temperature.innerText = data.current.temp_c+'°C';
    details[0].innerText = `cloud: ${data.current.cloud}`;
    details[1].innerText = `humidity: ${data.current.humidity}`;
    details[2].innerText = `wind: ${data.current.wind_kph} km/h`;

    city.innerText = `${data.location.name}, ${data.location.region}`;
    date[0].innerText = `${data.location.localtime}`;
    date[1].innerText = `${data.current.condition.text}`;
}

function temperatureConversion(type) {
    if (type == 'celcius') {
        temperature.innerHTML = data.current.temp_c +'°C';
    } else {
        temperature.innerHTML = data.current.temp_f + '°F';
    }
}

celcius.addEventListener('click', () => {
    celcius.classList.add('highlight');
    fahrenhiet.classList.remove('highlight');
    temperatureConversion('celcius');
})


fahrenhiet.addEventListener('click', () => {
    fahrenhiet.classList.add('highlight');
    celcius.classList.remove('highlight');
    temperatureConversion('fahrenhiet');
})