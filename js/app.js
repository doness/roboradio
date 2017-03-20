var $animation = document.getElementById("animation");
var $animWrapper = document.getElementById("anim-wrapper");
var $audio = document.getElementById("audio");

var player = {
    station: "",
    paused: true,
}


var music = {
   blues:  [
        "blues",
       {
           info: "bar-legends",
           url: "http://50.7.98.106:8719/;stream.nsv&type=mp3",
           genre: "blues",
       },
       {
           info: "blues-after-hours",
           url: "http://46.23.68.170:8108/;stream.nsv&type=mp3",
           genre: "blues",
       }
   ],
}


var bluestest = "http://50.7.98.106:8719/;stream.nsv&type=mp3";


function play(newStation){
    player.station = newStation;
    player.paused = false;
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
            play(music.blues[1]);

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