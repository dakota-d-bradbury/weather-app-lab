// Constants - Data that does not change
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'd665df7391c8bb868fde13c4733f7668';

// Variables - Data that changes
let weatherData;
const $form = $('form');
const $input = $('input[type="text"]');
const $main = $('main');



// // Event Listeners
$form.on('submit', handleSubmit);
// Functions

function handleSubmit(evt) {
    evt.preventDefault(); 
    const weatherLocation = $input.val();
  $.ajax(`${BASE_URL}weather?q=`+weatherLocation+`&units=imperial&appid=${API_KEY}`)
        .then(function(data) {
            weatherData = data;
        
        // add data as text content to our DOM elements
            render();

    }, function(error) {
        // failure callback function
            console.log(error);
    });
}



function render() {
    $main.html(
   // <img src="${weatherData.Poster}" alt="${weatherData.Title}" />
    `<h3>Weather For:</h3>
    <h3><p id="city">${weatherData.name}</p></h3>
    <p>Temperature</p>
    <p id="temp">${weatherData.main.temp}</p>
    <p>Feels Like</p>
    <p id="feels_like">${weatherData.main.feels_like}</p>
    <p>Weather</p>
    <p id ="value">${weatherData.weather[0].description}</p>
`);
}; 