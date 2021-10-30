// Constants - Data that does not change
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'd665df7391c8bb868fde13c4733f7668';


    const weatherLocation = 'Dallas'//$input.val();
  const promise =  $.ajax(`${BASE_URL}weather?q=`+weatherLocation+`&appid=${API_KEY}`)
