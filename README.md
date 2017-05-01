A JavaScript Streaming Music Player. The code for this application is in /js/app.js

View the live demo at:
https://msrinteractive.github.io/roboradio/

This is a front-end javascript application. There are no server compilers required. Just plain old JavaScript and jQuery.
MAKE SURE TO LOAD JQUERY BEFORE YOU LOAD THIS SCRIPT IN YOUR HTML.

I will attempt to quickly outline how it works here, but please refer to the comments within the code for further explanation.

musicArray- The radio stations info, station number, genre number, genre info, and stream URL are saved as objects within the two dimensional musicArray. Each genre begins another value in the outer array, the inner arrays contain 6 station objects for each genre.
example: 
{
    info: "QMR Sugar Radio",
    url: "http://78.129.146.97:7108/stream.nsv&type=mp3",
    genre: "Pop",
    genreNumber: 0,
    stationNumber: 0
}

Adding stations - 
You can add stations following the same data structure. Simply add another outer array to the musicArray that contains 6 station objects with all of the same properties as shown above. (info, url, genre, genreNumber, and stationNumber) Station number should be 0 through 5 and genreNumber should be whatever the next logical # is in the series based on the rest of the array. 

The player object- The player object is where all the magic happens. To play music: first a station is assigned to the player object by the setStation method, and then the playMusic method assigns the player.station.url to the currentAudio.src and runs currentAudio.play();
example: 
var player = {
    station: musicarray[0][0],
    paused: true,
    genreNumber: 0,
    stationNumber: 0
}

To play a station: first call setStation and pass in a station as a parameter, and then call playMusic.
Example:
setStation(musicArray[1][4]);
playMusic();

Play and Pause -
The music can be paused or played by calling the pause() method with a click function.

Player buttons - 
To set an element that advances on click to the next station use the ID #step-forward on your element. 
To set an element that advances on click to the next genre use the ID #genre-next.
To set an element that sets a random station on click, and plays the music, use ID #random.
To set an element that acts as a play/pause button use the ID #playPause.

Station and Genre display
To display the current station set a text element to ID station-text.
To display the current genre set a text element to ID genre-text.

Number buttons - 
You can assign 6 numbered buttons to switch through the 6 corresponding stations for each genre by creating a button with the class of 
number-button and set an attribute data-station="#" using the # of the corresponding station.
Example: 
<button class="number-button" data-station="1">1</button>
<button class="number-button" data-station="2">2</button>
<button class="number-button" data-station="3">3</button>

Genres-list
To create a list of Genres simply create a div with the ID of #genres
The script will populate this list with clickable H3 elements for each genre. 

Stations-list
To create a list of Genres simply create a div with the ID of #stations
The script will populate this list with clickable H3 elements for each station. It also creates an H2 with the title of each genre. 

Favorites List
To create a list of favorite stations simply create a div with the ID of #favorites
The script will polulate this list with clickable H3 elements for each station. 

Add a favorite station
To create a button that will add the current station to your favorites list, simply create a button with the ID of #add-fav
The script will add that station to the favorites array, and then set the cookie overwriting the previous cookie. 

Remove all favorites 
To create a button that removes all previous saved stations, simply create a button with the ID of #clear.

Views
There is additional code written in to cycle between player views using toggle methods. 
Please refer to app.js line 1051 for more information. 

Color Switching
It's possible to create a button that switches stylesheets. 
1.) First create an empty link tag with the ID #theme-switcher in the head of your html 
example
<link href="" type="text/css" rel="stylesheet" id="theme-switcher">
2.) Next create a button with the class 'colorswitch' and a data-color value that corresponds to the name of the stylesheet. 
Note: You do not need to add '.css' to your data-color value. See example. 
example
<button id="red-theme" class="btn colorswitch" data-color="red">RED</button>
3.) Put your stylesheet in the /css folder, so this example loads /css/red.css into the href in the link tag when clicked. 

Animation
When the player is playing, a pulsing animation is added to any elements in the page containing the class 'speaker'
If you'd like a pulsing animation for an image or element on your page, simply add the class 'speaker' to your element. 
If you'd like to change the name of this class, refer to app.js line 965 and 974 or thereabouts in the playMusic and pause methods. 

Enjoy! 
Please enjoy this script and distribute it freely, but I ask that you please credit me in the code with my name and the hyperlink msrinteractive.com and keep your source code open for others to enjoy! 
