var $animation = document.getElementById("animation");
var $animWrapper = document.getElementById("anim-wrapper");



var musicarray = [

    //POP GENRE
    [
        {
            info: "QMR Sugar Radio",
            url: "http://78.129.146.97:7108/stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 0
        },
        {
            info: "Phoenix Radio",
            url: "http://80.195.148.109:3384/;stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 1
        },
        {
            info: "Teen FM",
            url: "http://82.223.28.90:8091/stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 2
        },
        {
            info: "StarDusk FM",
            url: "http://206.190.136.141:1966/Live;stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 3
        },
        {
            info: "Plus Radio",
            url: "http://170.75.144.250:13338/;stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 4
        },
        {
            info: "POP FM 98.7",
            url: "http://158.69.242.81:4052/stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 5
        }
    ],

    //ELECTRO GENRE
    [
        {
            info: "CannibalRadio",
            url: "http://213.239.206.179:8238/stream.nsv&type=mp3",
            genre: "Electro",
            genreNumber: 1,
            stationNumber: 0
        },
        {
            info: "HouseBase.AT",
            url: "http://5.175.227.187:8000/stream.nsv&type=mp3",
            genre: "Electro",
            genreNumber: 1,
            stationNumber: 1
        },
        {
            info: "D-radio",
            url: "http://176.31.248.14:11198/stream.nsv&type=mp3",
            genre: "Electro",
            genreNumber: 1,
            stationNumber: 2
        },
        {
            info: "Horizon FM 24/7",
            url: "http://185.27.140.54:8024/stream.nsv&type=mp3",
            genre: "Electro",
            genreNumber: 1,
            stationNumber: 3
        },
        {
            info: "SynthWay Radio",
            url: "http://142.4.223.16:8380/stream.nsv&type=mp3",
            genre: "Electro",
            genreNumber: 1,
            stationNumber: 4
        },
        {
            info: "Z 103.5",
            url: "http://166.62.44.23:8006/stream.nsv&type=mp3",
            genre: "Electro",
            genreNumber: 1,
            stationNumber: 5
        }

    ],

    // BLUES GENRE
    [
        {
            info: "Bar-legends",
            url: "http://50.7.98.106:8719/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 0
        },
        {
            info: "Deep Jams",
            url: "http://74.50.122.103:9748/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 1
        },
        {
            info: "Music City Roadhouse",
            url: "http://stereo.wavestreamer.com:5022/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 2
        },
        {
            info: "big Blues Swing",
            url: "http://www.bigblueswing.com:8002/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 3
        },
        {
            info: "Caledonia\'s",
            url: "http://66.55.82.222:8031/;stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 4
        },
        {
            info: "Blues Rock Audiophile",
            url: "http://8.38.78.173:8240/;steam.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 5
        }
    ]


    //EMPTY GENRE
    //[
    //    {
    //        info: "",
    //        url: "stream.nsv&type=mp3",
    //        genre: "",
    //        genreNumber: 99,
    //        stationNumber: 0
    //    },
    //    {
    //        info: "",
    //        url: "stream.nsv&type=mp3",
    //        genre: "",
    //        genreNumber: 99,
    //        stationNumber: 1
    //    },
    //    {
    //        info: "",
    //        url: "stream.nsv&type=mp3",
    //        genre: "",
    //        genreNumber: 99,
    //        stationNumber: 2
    //    },
    //    {
    //        info: "",
    //        url: "stream.nsv&type=mp3",
    //        genre: "",
    //        genreNumber: 99,
    //        stationNumber: 3
    //    },
    //    {
    //        info: "",
    //        url: "stream.nsv&type=mp3",
    //        genre: "",
    //        genreNumber: 99,
    //        stationNumber: 4
    //    },
    //    {
    //        info: "",
    //        url: "stream.nsv&type=mp3",
    //        genre: "",
    //        genreNumber: 99,
    //        stationNumber: 5
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
        console.log("Step-Forward " + player.station.info);
    }
    else {
        setStation(musicarray[player.genreNumber][0]);
        playMusic();
        console.log("Step-Forward " + player.station.info);
    }

});

$("#genre-next").click(function(){
    if (player.genreNumber < musicarray.length -1){
        setStation( musicarray[ (player.genreNumber + 1) ][0] );
        playMusic();
        console.log("Change to Genre " + player.station.genre);
    } else {
        setStation( musicarray[0][0] );
        playMusic();
        console.log("Change to Genre " + player.station.genre);
    }
});

$("#random").click(function(){
    pickGenre = Math.floor(Math.random() * musicarray.length);
    pickSong = Math.floor(Math.random() * musicarray[pickGenre].length)
    setStation(musicarray[pickGenre][pickSong]);
    playMusic();
    console.log("Picked random " + player.station.genre + " " + player.station.info);
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



//jQuery ready function

//$(document).ready(function(){
//
//
//});

