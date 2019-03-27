require("dotenv").config();


var fs = require("fs");
// add code from keys.js file
var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var spotify = new spotify(keys.spotify);


var axios = require("axios")
var moment = require("moment")


// variables to be used for arguments/process 

var produce = process.argv;
var response = (process.argv[2]);
var userInput = (process.argv[3]);

for (var i = 4; i < produce.length; i++) {
    userInput += "+" + produce[i]
};

// function queryInput () {
    switch (response) {
        case "spotify-this-song": 
        spotify_this_song ();
        break;


        case "movie-this":
        movie ();
        break;

        case "concert-this":
        conert_this ();
        break;


    }



// }


// function for spotify

function spotify_this_song() {

    spotify
        .search ( {type: 'track', query: userInput, limit: 1
    })
        .then(function(produce) {
            console.log("-----------");
            console.log('Artist: ' + produce.tracks.items[0].album.artists[0].name);
            console.log('Track: '+ produce.tracks.items[0].name);
            console.log('Preview: ' + produce.tracks.items[0].preview_url);
            console.log('Album: ' + produce.tracks.items[0].album.name);
            console.log("-----------");
        });
    };

// OMBD searching function

//movie-this:
function movie(movieName) {
    // Then run a request with axios to the OMDB API with the movie specified 
    var queryUrl = "http://www.omdbapi.com/?t=&y=&plot=short&apikey=trilogy";
    if (!movieName) {
      movieName = 'Mr Nobody';
      console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
      console.log("It's on Netflix!");
    } else {
      // console.log(queryUrl);
      axios.
      get(queryUrl).then(
        function (response) {
          console.log("Movie Title: " + response.data.Title);
          console.log("Movie Release Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.imdbRating);
          console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Starring: " + response.data.Actors);
        }
      );
    }
  }

// searching for bands function

function conert_this() {


}















 
//   .catch(function (error) {
//     console.log(error);
//   });