var $animation = document.getElementById("animation");
var $animWrapper = document.getElementById("anim-wrapper");
var $audio = document.getElementById("audio");

var player = {
    station: "",
    paused: true,
}

var musicarray = [
    [
        {
            info: "bar-legends",
            url: "http://50.7.98.106:8719/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 0,
            stationNumber: 0,
        },
        {
            info: "blues-after-hours",
            url: "http://46.23.68.170:8108/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 0,
            stationNumber: 1,
        }
    ],
    [
        {
            info: "blues-after-hours",
            url: "http://46.23.68.170:8108/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 0,
            stationNumber: 1,
        },
        {
            info: "blues-after-hours",
            url: "http://46.23.68.170:8108/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 0,
            stationNumber: 1,
        }
    ]
]


var genres = [
    "blues", "rock", "pop", "electronic", "rap",
]


var bluestest = "http://50.7.98.106:8719/;stream.nsv&type=mp3";


function play(newStation){
    player.station = newStation;
    player.paused = false;
    player.genreNum = newStation.number;
    player.stationNumber = newStation.stationNumber;
    $($audio).attr("src", newStation.url);
    document.getElementById("station-text").innerHTML = newStation.info;
    document.getElementById("genre-text").innerHTML = newStation.genre;
}

function stop(){
    $($audio).attr("src", "");
}


function startStopper(){
    $("#animation").click(function(){
        if ($animation.className == "stopped") {
            $($animation).removeClass("stopped");
            $($animation).addClass("spinning");
            $($animWrapper).addClass("pulsing");
            play(musicarray[0][0]);

        } else {
            $($animation).removeClass("spinning");
            $($animWrapper).removeClass("pulsing");
            $($animation).addClass("stopped");
            player.paused = true;
            stop();
        }


    });
}





$(document).ready(function(){


    startStopper();



});