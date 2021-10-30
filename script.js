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
	$.ajax(`${BASE_URL}weather?q=` + weatherLocation + `&units=imperial&appid=${API_KEY}`)
		.then(function (data) {
			weatherData = data;
			//Round importred temps to nearest uin
			roundedTemp = Math.round(weatherData.main.temp);
			roundedFeelsLike = Math.round(weatherData.main.feels_like);

			// add data as text content to our DOM elements
			render();

		}, function (error) {
			// failure callback function
			console.log(error);
		});
}


function render() {
	$main.html(

	`<h3>Weather For: ${weatherData.name}</p></h3>
    <p>Temperature: ${roundedTemp}℉</p>
    <p>Feels Like: ${roundedFeelsLike}℉</p>
    <p>Weather Details: ${weatherData.weather[0].description}</p>
    <p>Weather General: ${weatherData.weather[0].main}</p>
    
    `);
}; 