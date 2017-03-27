var $animation = document.getElementById("animation");
var $animWrapper = document.getElementById("anim-wrapper");
var button1 = document.getElementById("1");
var button2 = document.getElementById("2");

var totalGenres = 1;
var musicarray = [

    //GENRE BLUES
    [
        {
            info: "bar-legends",
            url: "http://50.7.98.106:8719/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 0,
            stationNumber: 0
        },
        {
            info: "Deep Jams",
            url: "http://74.50.122.103:9748/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 0,
            stationNumber: 1
        },
        {
            info: "Music City Roadhouse",
            url: "http://stereo.wavestreamer.com:5022/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 0,
            stationNumber: 2
        }
    ],

    //GENRE BlUES TWO
    [
        {
            info: "big Blues Swing",
            url: "http://www.bigblueswing.com:8002/;stream.nsv&type=mp3",
            genre: "blues two",
            genreNumber: 1,
            stationNumber: 0
        },
        {
            info: "blues-after-hours",
            url: "http://46.23.68.170:8108/;stream.nsv&type=mp3",
            genre: "blues two ",
            genreNumber: 1,
            stationNumber: 1
        }
    ],

    //EMPTY GENRE
    //[
    //    {
    //
    //    },
    //    {
    //
    //    },
    //    {
    //
    //    },
    //    {
    //
    //    },
    //    {
    //
    //    },
    //    {
    //
    //    }
    //]


];


var player = {
    station: musicarray[0][0],
    paused: true,
    genreNumber: 0,
    stationNumber: 0
};

var currentAudio = new Audio(player.station.url);

var genres = [
    "blues", "rock", "pop", "electronic", "rap", "country",
];


function pause(){
    currentAudio.pause();
        $($animation).removeClass("spinning");
        $($animWrapper).removeClass("pulsing");
        $($animation).addClass("stopped");
        player.paused = true;
}

function playMusic(){

    currentAudio.src = player.station.url;
    player.paused = false;

    $($animation).removeClass("stopped");
    $($animation).addClass("spinning");
    $($animWrapper).addClass("pulsing");
    currentAudio.play();
}


function startStopper(){
    if(player.paused === false){
        pause();
    } else {
        playMusic();
    }
}


function setStation(newStation){


    player.station = newStation;
    player.stationNumber = newStation.stationNumber;
    player.genreNumber = newStation.genreNumber;
    document.getElementById("station-text").innerHTML = newStation.info;
    document.getElementById("genre-text").innerHTML = newStation.genre;
}

$("#animation").click(function() {
    setStation(player.station);
    startStopper();

});

$("#playPause").click(function(){
    setStation(player.station);
    startStopper();
});

$("#step-forward").click(function(){

    if (player.stationNumber < musicarray[player.genreNumber].length -1) {
        setStation(musicarray[player.genreNumber][(player.stationNumber +1)]);
        playMusic();
    } else {
        setStation(musicarray[player.genreNumber][0]);
        playMusic();
    }

});

$("#genre-next").click(function(){
    if (player.genreNumber < totalGenres){
        setStation( musicarray[ (player.genreNumber + 1) ][0] );
        playMusic();
    } else {
        setStation( musicarray[0][0] );
        playMusic();
    }
});





$("#1").click(function(){

    setStation(musicarray[player.genreNumber][0]);
    playMusic();
});


$("#2").click(function(){

    setStation(musicarray[player.genreNumber][1]);
    playMusic();
});


$("#3").click(function(){

    setStation(musicarray[player.genreNumber][2]);
    playMusic();
});

$("#4").click(function(){

    setStation(musicarray[player.genreNumber][3]);
    playMusic();
});

$("#5").click(function(){

    setStation(musicarray[player.genreNumber][4]);
    playMusic();
});

$("#6").click(function(){

    setStation(musicarray[player.genreNumber][5]);
    playMusic();
});









//$(document).ready(function(){
//
//
//});

