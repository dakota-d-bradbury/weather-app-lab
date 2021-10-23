// Constants - Data that does not change

// Variables - Data that changes

// Cached Element References
const $title = $('#title');
const $year = $('#year');
const $rated = $('#rated');
const $form = $('form');
const $input = $('input[type="text"]');

// Event Listeners
$form.on('submit', handleSubmit);
// Functions

function handleSubmit(evt) {
    evt.preventDefault(); // this turns off the default page refresh behavior in the browser
    // grab the movie title we're submitting in the form
    const movieTitle = $input.val();
    // use that movie to request a specific movie
    console.log(movieTitle)

    // Using jQuery's $.ajax() method
    // We use it to request information from a resource using AJAX
    // This method, when called, returns a JavaScript promise Object
    
    
    // the .then() method is how we assign instructions
    // to the promise object so we can tell it what to do
    // when the promise is fultilled
    $.ajax('https://www.omdbapi.com/?apikey=5ceecba4&t=' + movieTitle)
    .then(function(data) {
        // success callback function
        console.log('promise fulfilled');
        console.log(data);
        
        // add data as text content to our DOM elements
        $title.text(data.Title);
        $year.text(data.Year);
        $rated.text(data.Rated);
    
    }, function(error) {
        // failure callback function
        console.log('promise failed');
        console.log(error);
    });
}