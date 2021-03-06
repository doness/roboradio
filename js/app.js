// ROBORADIO

// RoboRadio JS Streaming Music Player copyright 2017 @ Michael Scott Riccardi - msrinteractive.com
// MIT open source license - please attribute credit to the original author by hyperlink and keep your source code open, as well.

var favorites = []; //declare an empty array where favorite stations objects are kept before saving to a cookie with setCookie
var cookie = null;  //declare a bull variable to use later to save cookies

// THE PLAYER

// music is played by passing a station object into the setStation function and calling the playMusic function.
// example: setStation(musicarray[0][0]); playMusic();
// Music can be paused by calling the pause function - example: pause();

// THE MUSIC

// the music array is a two dimensional array that stores an object for each station
// the outer array separates genres, the inner area separates stations, each station is a single object
var musicarray   = [

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
            info: "Mix Radio Extra",
            url: "http://51.255.127.128:8032/stream?icy=http",
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
            url: "http://206.190.136.141:1966/Live/stream.nsv&type=mp3",
            genre: "Pop",
            genreNumber: 0,
            stationNumber: 3
        },
        {
            info: "Plus Radio",
            url: "http://170.75.144.250:13338/stream.nsv&type=mp3",
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

    //EDM GENRE
    [
        {
            info: "Radio Hunter",
            url: "http://listen.shoutcast.com/radiohunter-theelectronicchannel?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 0
        },
        {
            info: "DEEP FM.AT",
            url: "http://195.66.134.42/sd?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 1
        },
        {
            info: "RadioParty.PL",
            url: "http://176.31.240.87:8000/rp.mp3?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 2
        },
        {
            info: "PulseRadio Dance",
            url: "http://178.32.98.117/pulsHD.mp3?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 3
        },
        {
            info: "Electric FM",
            url: "http://listen.shoutcast.com/electricfmamericasrealdance?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 4
        },
        {
            info: "VirtualDJ Radio",
            url: "http://52.0.120.216:8000/channel1.mp3?stream.nsv&type=mp3",
            genre: "EDM",
            genreNumber: 1,
            stationNumber: 5
        }

    ],

    // BLUES GENRE
    [
        {
            info: "Bar-legends",
            url: "http://50.7.98.106:8719/stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 0
        },
        {
            info: "Deep Jams",
            url: "http://74.50.122.103:9748/stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 1
        },
        {
            info: "Music City Roadhouse",
            url: "http://stereo.wavestreamer.com:5022/stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 2
        },
        {
            info: "big Blues Swing",
            url: "http://www.bigblueswing.com:8002/stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 3
        },
        {
            info: "Caledonia\'s",
            url: "http://66.55.82.222:8031/stream.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 4
        },
        {
            info: "Blues Audiophile",
            url: "http://8.38.78.173:8240/steam.nsv&type=mp3",
            genre: "blues",
            genreNumber: 2,
            stationNumber: 5
        }
    ],

    //Classic Rock
    [
        {
            info: "Rock Radio SI",
            url: "http://212.18.63.135:9034/rockstream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 0
        },
        {
            info: "Beatles Radio",
            url: "http://64.40.99.76:8000/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 1
        },
        {
            info: "Classic Rock 109",
            url: "http://198.27.70.42:10042/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 2
        },
        {
            info: "Bob FM",
            url: "http://173.192.70.138:8980/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 3
        },
        {
            info: "Classic Rock NY",
            url: "http://45.79.186.124:8351/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 4
        },
        {
            info: "JUST Classic Rock",
            url: "http://199.168.117.61:8026/stream.nsv&type=mp3",
            genre: "Classic Rock",
            genreNumber: 3,
            stationNumber: 5
        }
    ],

    //HIP HOP GENRE
    [
        {
            info: "POWER HITZ",
            url: "http://66.85.88.174/1power?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 0
        },
        {
            info: "HOT 108 JAMZ",
            url: "http://66.85.88.174/hot108?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 1
        },
        {
            info: "BREAKZ.FM",
            url: "http://46.4.121.133:8100/stream128?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 2
        },
        {
            info: "BEAT FM ",
            url: "http://89.105.32.27/beat128.mp3?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 3
        },
        {
            info: "103.7 DA BEAT",
            url: "http://46.105.122.141:8742/stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 4
        },
        {
            info: "WWMR 105 THE HEAT",
            url: "http://38.107.243.187:8000/stream?stream.nsv&type=mp3",
            genre: "Hip Hop",
            genreNumber: 4,
            stationNumber: 5
        }
    ],

    //RAP GENRE
    [
        {
            info: "TTTRadio.NET",
            url: "http://69.143.55.164/stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 0
        },
        {
            info: "AOH Radio",
            url: "http://206.190.136.141:3317/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 1
        },
        {
            info: "Unsigned Hype",
            url: "http://51.255.83.127:9597/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 2
        },
        {
            info: "Liquid Hip Hop",
            url: "http://198.105.214.140:1806/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 3
        },
        {
            info: "POWER 101.8 NY",
            url: "http://206.190.136.141:4383/Live?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 4
        },
        {
            info: "Peach Radio",
            url: "http://38.135.36.74:8018/peach?stream.nsv&type=mp3",
            genre: "Rap",
            genreNumber: 5,
            stationNumber: 5
        }
    ],

    //CHILLOUT GENRE
    [
        {
            info: "The Buzzout Room",
            url: "http://149.56.183.178:8034/stream?icy=http",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 0
        },
        {
            info: "Nebula",
            url: "http://eu.radioboss.fm:8224/live?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 1
        },
        {
            info: "Ambient Sleeping Pill",
            url: "http://176.31.107.8:8446/stream?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 2
        },
        {
            info: "DI Ambient Fantasy",
            url: "http://5.39.71.159:8193/stream?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 3
        },
        {
            info: "TriChrome World",
            url: "http://173.192.105.231:1309/Live?stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 4
        },
        {
            info: "Smooth Drops",
            url: "http://5.2.229.172:9876/stream.nsv&type=mp3",
            genre: "Chillout",
            genreNumber: 6,
            stationNumber: 5
        }
    ],

    //Dubstep GENRE
    [
        {
            info: "DUBSTEP.FM",
            url: "http://stream.dubstep.fm/64mp3?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 0
        },
        {
            info: "Dubstep Radio .FM",
            url: "http://198.15.94.34:8018/stream?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 1
        },
        {
            info: "Dance Factory",
            url: "http://listen.radionomy.com/DanceFactory?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 2
        },
        {
            info: "HOP SKIP \&DubStep",
            url: "http://192.240.102.131:7637/stream?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 3
        },
        {
            info: "SubSonic FM Radio",
            url: "http://198.27.80.205:5768/stream?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 4
        },
        {
            info: "EDM Colorado Ch.2",
            url: "http://38.107.242.58:8010/edmco2?stream.nsv&type=mp3",
            genre: "Dubstep",
            genreNumber: 7,
            stationNumber: 5
        }
    ],

    // College Genre
    [
        {
            info: "RADIO K KUOM",
            url: "http://128.101.73.38:8256/stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 0
        },
        {
            info: "ACADEMY FM",
            url: "http://37.187.93.104:8097/stream?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 1
        },
        {
            info: "WHUS",
            url: "http://158.69.225.238:7499/WHUS?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 2
        },
        {
            info: "101.5 The Hawk",
            url: "http://142.222.6.62:8000/stream/2/stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 3
        },
        {
            info: "Guerrila Radio",
            url: "http://174.37.16.73:8291/Live?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 4
        },
        {
            info: "88.9 WQSU-FM",
            url: "http://198.105.214.140:9045/Live?stream.nsv&type=mp3",
            genre: "College",
            genreNumber: 8,
            stationNumber: 5
        }
    ],

    //MODERN COUNTRY GENRE
    [
        {
            info: ".113FM Kickin Country",
            url: "http://listen.shoutcast.com/113fmbigkickin-country?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 0
        },
        {
            info: "New Country 93",
            url: "http://173.192.70.138:9170/stream?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 1
        },
        {
            info: "PowerHitz Country",
            url: "http://66.85.88.174/country?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 2
        },
        {
            info: "2 Country",
            url: "http://listen.shoutcast.com/2Country?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 3
        },
        {
            info: "In My Dreams Radio",
            url: "http://158.69.135.138:8028/stream?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 4
        },
        {
            info: "Calm Country",
            url: "http://184.173.142.117:13828/stream?stream.nsv&type=mp3",
            genre: "Modern Country",
            genreNumber: 9,
            stationNumber: 5
        }
    ],

    //Classic Country GENRE
    [
        {
            info: "Today's Country",
            url: "http://108.163.197.114:8249/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 0
        },
        {
            info: "Gone Country",
            url: "http://192.99.41.102:5044/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 1
        },
        {
            info: "Steel Radio",
            url: "http://174.127.82.223:16230/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 2
        },
        {
            info: "DI Radio Country",
            url: "http://5.39.71.159:8110/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 3
        },
        {
            info: "Outback Radio",
            url: "http://104.250.155.162:9980/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 4
        },
        {
            info: "ThrowBack Country",
            url: "http://192.99.177.195:8026/stream?stream.nsv&type=mp3",
            genre: "Classic Country",
            genreNumber: 10,
            stationNumber: 5
        }
    ],

    //Hard Rock GENRE
    [
        {
            info: "XXXrock.FM",
            url: "http://23.29.71.154:8140/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 0
        },
        {
            info: "Melodic Rock",
            url: "http://37.59.14.77:8124/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 1
        },
        {
            info: "RockXradio",
            url: "http://158.69.227.214:8000/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 2
        },
        {
            info: "Sonora Metal",
            url: "http://46.105.122.141:6664/stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 3
        },
        {
            info: "DI Hard Rock",
            url: "http://5.39.71.159:8165/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 4
        },
        {
            info: "Hang 10 RockRadio",
            url: "http://158.69.227.214:8113/stream?stream.nsv&type=mp3",
            genre: "Hard Rock",
            genreNumber: 11,
            stationNumber: 5
        }
    ],

    //METAL GENRE
    [
        {
            info: "Metal Nation",
            url: "http://91.121.164.210:8380/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 0
        },
        {
            info: "Rock & Metal",
            url: "http://192.99.62.212:9964/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 1
        },
        {
            info: "BrainGell",
            url: "http://5.189.142.165:8096/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 2
        },
        {
            info: "MetalHead",
            url: "http://198.178.121.76:8012/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 3
        },
        {
            info: "Prog Palace",
            url: "http://199.168.117.61:8006/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 4
        },
        {
            info: "Metalourgio",
            url: "http://78.46.73.91:9043/stream?stream.nsv&type=mp3",
            genre: "Metal",
            genreNumber: 12,
            stationNumber: 5
        }
    ],

    //Rockabilly GENRE
    [
        {
            info: "Rockin626.com",
            url: "http://192.99.4.210:3574/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 0
        },
        {
            info: "Bazooka Psychobilly",
            url: "http://86.105.205.246:30130/stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 1
        },
        {
            info: "Streaming Billy",
            url: "http://209.95.50.189:8066/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 2
        },
        {
            info: "Elvis Presley",
            url: "http://37.59.42.207:8385/stream2?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 3
        },
        {
            info: "Daltons Radio",
            url: "http://94.23.36.117:5210/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 4
        },
        {
            info: "24/7 Rock N Roll",
            url: "http://80.86.84.31:8130/stream?stream.nsv&type=mp3",
            genre: "Rockabilly",
            genreNumber: 13,
            stationNumber: 5
        }
    ],

    //Alternative GENRE
    [
        {
            info: "AAC Plus Dreampop",
            url: "http://78.47.96.202:8130/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 0
        },
        {
            info: "CAYA Radio 90s",
            url: "http://167.114.210.232:8105/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 1
        },
        {
            info: "London Burning",
            url: "http://192.99.4.210:3800/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 2
        },
        {
            info: "CDNX Indie",
            url: "http://109.123.70.138:8136/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 3
        },
        {
            info: "Malfunction",
            url: "http://188.165.240.90:8424/stream?stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 4
        },
        {
            info: "Brittania",
            url: "http://5.189.151.48/stream.nsv&type=mp3",
            genre: "Alternative",
            genreNumber: 14,
            stationNumber: 5
        }
    ],

    //SKA PUNK GENRE
    [
        {
            info: "RFP RADIO.com ",
            url: "http://184.171.163.20:8210/stream?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 0
        },
        {
            info: "Gutter Punk Radio",
            url: "http://23.228.66.67:8000/stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 1
        },
        {
            info: "Celtic Folk Punk",
            url: "http://69.175.94.98:8240/stream?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 2
        },
        {
            info: "Radio No Future",
            url: "http://37.187.124.134:8100/stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 3
        },
        {
            info: "Punk Rock",
            url: "http://199.87.239.197:8000/stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 4
        },
        {
            info: "Third Wave Ska",
            url: "http://206.190.136.141:2735/Live?stream.nsv&type=mp3",
            genre: "SKA PUNK",
            genreNumber: 15,
            stationNumber: 5
        }
    ],

    //K Pop GENRE
    [
        {
            info: "K popway ",
            url: "http://198.105.214.140:2684/Live?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 0
        },
        {
            info: "Aewen Kpop",
            url: "http://37.72.100.39:8001/stream?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 1
        },
        {
            info: "Kpop Replay",
            url: "http://167.114.64.181:8325/stream?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 2
        },
        {
            info: "Kpop top100",
            url: "http://121.159.140.57:8000/128?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 3
        },
        {
            info: "Epic Kpop",
            url: "http://158.69.225.238:6070/Live?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 4
        },
        {
            info: "K O Mumyong Radio",
            url: "http://144.217.129.213:9942/stream?stream.nsv&type=mp3",
            genre: "K pop",
            genreNumber: 16,
            stationNumber: 5
        }
    ],

    // Latin GENRE
    [
        {
            info: "Cafe Romantico ",
            url: "http://192.187.112.50:8190/stream?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 0
        },
        {
            info: "XTREMO Stereo",
            url: "http://94.23.6.53:8053/stream?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 1
        },
        {
            info: "Tropicalisima Bachata",
            url: "http://50.7.56.2:8024/stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 2
        },
        {
            info: "Radio HUANCAYO Peru",
            url: "http://212.83.146.67:7208/stream?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 3
        },
        {
            info: "Reggaeton Hits AAC",
            url: "http://216.230.231.122:8000/32AAC?stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 4
        },
        {
            info: "Tropical 100 Bolero",
            url: "http://108.54.234.102:8024/stream.nsv&type=mp3",
            genre: "Latin",
            genreNumber: 17,
            stationNumber: 5
        }
    ],

    // Classical Symphony GENRE
    [
        {
            info: "Classic Mozart ",
            url: "http://37.251.146.169:8300/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 0
        },
        {
            info: "SignPilot LLC",
            url: "http://198.143.144.226:8037/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 1
        },
        {
            info: "Classic Romania",
            url: "http://37.251.146.169:8000/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 2
        },
        {
            info: "Classic Beethoven",
            url: "http://37.251.146.169:7200/stream2?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 3
        },
        {
            info: "Wayyradio Piano",
            url: "http://37.59.42.207:8367/stream?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 0
        },
        {
            info: "Music101 Piano",
            url: "http://37.59.42.207:8559/stream2?stream.nsv&type=mp3",
            genre: "Classical",
            genreNumber: 18,
            stationNumber: 1
        }
    ],

    // Reggae GENRE
    [
        {
            info: "Lommok Radio",
            url: "http://37.59.47.192:8696/stream?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 0
        },
        {
            info: "Radio Feverpitch",
            url: "http://82.94.166.107:8097/stream?stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 1
        },
        {
            info: "CCMLF Radio",
            url: "http://69.197.169.178:27488/stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 2
        },
        {
            info: "DFW Caribbean",
            url: "http://69.197.169.178:30202/stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 3
        },
        {
            info: "NLR Roots",
            url: "http://91.121.205.70:4062/stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 4
        },
        {
            info: "UPYD 692 ",
            url: "http://91.121.205.70:4062/stream.nsv&type=mp3",
            genre: "Reggae",
            genreNumber: 19,
            stationNumber: 5
        }
    ]

//End of musicarray
];

// THE PLAYER LOGIC

// set initial properties for the player object
var player = {
    station: musicarray[0][0],
    paused: true,
    genreNumber: 0,
    stationNumber: 0
};
//initialize the audio object, and a volume level
var currentAudio = new Audio(player.station.url);
currentAudio.volume = 0.5;
// Defining the playMusic() function
// Sets Vol based on previous volume. Sets the pause property to false. Starts the animation. reduces the volume to a quarter, starts the audio,
// ramps the audio up to half at 250ms, and to full at 500ms
function playMusic() {
    var vol = currentAudio.volume;
    currentAudio.src = player.station.url;
    player.paused = false;
    $("#animation").removeClass("stopped");
    $(".speaker").addClass("pulsing");
    currentAudio.volume = (vol / 4);
    currentAudio.play();
    setTimeout(function(){currentAudio.volume = (vol / 2);},250);
    setTimeout(function(){currentAudio.volume = (vol / 1);},500);
}
// pauses audio, stops the animation, and sets the pause value to true
function pause() {
    currentAudio.pause();
    $(".speaker").removeClass("pulsing");
    $("#animation").addClass("stopped");
    player.paused = true;
}
// Sets the station by accepting a new station object as a parameter, assigning it to the player object, and then playing it.
function setStation(newStation) {
    player.station = newStation;
    player.stationNumber = newStation.stationNumber;
    player.genreNumber = newStation.genreNumber;
    $("#station-text").text(newStation.info);
    $("#genre-text").text(newStation.genre);
}
// Starts the music if paused, pauses if playing.
function startStopper() {
    if (player.paused === false) {
        pause();
    } else {
        playMusic();
    }
}
// when the speaker is clicked, start or stop the music
$(".speaker").click(function () {
    setStation(player.station);
    startStopper();
});
// when play/pause is clicked, start or stop the music
$("#playPause").click(function () {
    setStation(player.station);
    startStopper();
});
// advances to the next station in a genre, if your current station is 6, it goes back to the first [0] index station for that genre.
$("#step-forward").click(function () {
    if (player.stationNumber < musicarray[player.genreNumber].length - 1) {
        setStation(musicarray[player.genreNumber][(player.stationNumber + 1)]);
        playMusic();
        console.log("Step-Forward " + player.station.info);
    }
    else {
        setStation(musicarray[player.genreNumber][0]);
        playMusic();
        console.log("Step-Forward " + player.station.info);
    }
});
// advances to the next genre, if you are playing the last genre in the array, it goes back to the first [0] index genre.
$("#genre-next").click(function () {
    if (player.genreNumber < musicarray.length - 1) {
        setStation(musicarray[(player.genreNumber + 1)][0]);
        playMusic();
        console.log("Change to Genre " + player.station.genre);
    } else {
        setStation(musicarray[0][0]);
        playMusic();
        console.log("Change to Genre " + player.station.genre);
    }
});
// picks a random genre, and a random station, sets the station, and plays the music.
$("#random").click(function () {
    pickGenre = Math.floor(Math.random() * musicarray.length);
    pickSong = Math.floor(Math.random() * musicarray[pickGenre].length);
    setStation(musicarray[pickGenre][pickSong]);
    playMusic();
    console.log("Picked random " + player.station.genre + " " + player.station.info);
});
// grabs the data-station value from the button and sets the station to that number with the current genre, and restarts the music.
$(".number-button").click(function (e) {
    newStation = this.getAttribute('data-station');
    setStation(musicarray[player.genreNumber][newStation]);
    playMusic();
});
// grabs the data-color value and sets enables the corresponding CSS stylesheet
$(".colorswitch").click(function (e) {
    var newColor = this.getAttribute("data-color");
    var css = "css/" + newColor + ".css";
    $("#theme-switcher").attr("href", "css/" + newColor + ".css");
    console.log("Colors changed to " + newColor);
    showPlayer();
});
// DYNAMIC VIEWS

// hide views (except the player) initially so they don't appear until called
$("#genre-list").hide();
$("#about").hide();
$("#colors").hide();
$("#stations-list").hide();
$("#toys").hide();
$("#favorites-list").hide();

// define a function that hides everything
function hideAllViews(){
    $("#genre-list").hide();
    $("#about").hide();
    $("#colors").hide();
    $("#stations-list").hide();
    $("section").hide();
    $("#toys").hide();
    $("#favorites-list").hide();
}

// The following view functions use jQuery to show and hide the desired elements

function showPlayer() {
    hideAllViews();
    $("section").fadeIn();
}
function showGenre() {
    hideAllViews();
    $("#genre-list").fadeIn();
}
function showAbout() {
    hideAllViews();
    $("#about").fadeIn();
}
function showColors() {
    hideAllViews();
    $("#colors").fadeIn();
}
function showStations() {
    hideAllViews();
    $("#stations-list").fadeIn();
}
function showFavorites() {
    hideAllViews();
    $("#favorites-list").fadeIn();
}
function favoritesToggle() {
    if ($("#favorites-list").is(":visible")) {
        $("#favorites-list").hide();
        showPlayer();
    } else {
        showFavorites();
    }
}
function genreToggle() {
    if ($("#genre-list").is(":visible")) {
        $("#genre-list").hide();
        showPlayer();
    } else {
        showGenre();
    }
}
function aboutToggle() {
    if ($("#about").is(":visible")) {
        $("#about").hide();
        showPlayer();
    } else {
        showAbout();
    }
}
function colorsToggle() {
    if ($("#colors").is(":visible")) {
        $("#colors").hide();
        showPlayer();
    } else {
        showColors();
    }
}
function stationsToggle() {
    if ($("#stations-list").is(":visible")) {
        $("#stations-list").hide();
        showPlayer();
    } else {
        showStations();
    }
}
function visToggle() {
    if ($("#visuals").is(":visible")) {
        $("#visuals").slideUp();
    } else {
        $("#toys").hide();
        $("#visuals").slideDown();
    }
}
// Navigation- provide click functions to call the dynamic views

$("#genre-list-trigger").click(function () {
    genreToggle();
});

$("#stations-list-trigger").click(function () {
    stationsToggle();
});

$("#about-trigger").click(function () {
    aboutToggle();
});

$("#robot").click(function () {
    aboutToggle();
});

$("#colors-trigger").click(function () {
    colorsToggle();
});

$(".favorites-link").click(function(){
    favoritesToggle();
});

$(".close-button").click(function () {
    showPlayer();
});
$("#vis-toggle").click(function(){
    visToggle();
});

$(".list-station-link").click(function(){
    stationsToggle();
});

$(".list-genre-link").click(function(){
    genreToggle();
});

$(".list-theme-link").click(function(){
    showColors();
});
$("#show-lists").click(function(){
   showGenre();
});

$("#theme-player-button").click(function(){
    showColors();
});
// the toy-button click function grabs the data-toy attribute and sets the src attribute on the iframe to the corresponding selection
// this loads either the blob or the game into the bottom part of the screen and hides the visualizer if it's visible
$(".toy-button").click(function(e){
    var newToy = this.getAttribute("data-toy");
    $("#toys").attr("src", newToy);
    $("#visuals").slideUp();
    $("#toys").show();
});

// create the favorites list from the favorites array
// previously, when the script initializes, the favorites array is populated by the getCookie function
// the makeFavorites function iterates through the favorites array and creates H3 elements for each favorite station.
// it assigns a data-favorite value for each element that corresponds to the station in the favorites array.
function makeFavorites(){
    $("#favorites").html("");
    for (i=0; i< favorites.length; i++) {
        var text = ('<h3 class="pointer fav-triggers" data-favorite="' + i + '">' + favorites[i].info + "</h3>");
        $("#favorites").append(text);
    }
}
// call the function to populate the list
makeFavorites();

$(document).ready(function(){
// this click function grabs the data-favorite value from your selection in the list, sets the station, and then plays the music
    $(".fav-triggers").click(function (e) {
        var newStation = this.getAttribute("data-favorite");
        console.log("Station Changed to " + favorites[newStation].info);
        setStation(favorites[newStation]);
        showPlayer();
        playMusic();
    });
});

// create the genre list from the music array
// iterates through the array and creates an H3 element for each genre, and assigns a data-genre value for the H3 that corresponds.
for (i = 0; i < musicarray.length; i++) {
    var text = ('<h3 class="genre-triggers" data-genre="' + i + '">' + musicarray[i][0].genre + "</h3>");
    $("#genres").append(text);
}

//  Click function for the H3 elements - grabs the data-genre value and sets the station accordingly and runs the playMusic function
$(".genre-triggers").click(function (e) {
    var newGenre = this.getAttribute("data-genre");
    console.log("Genre Changed to " + musicarray[newGenre][0].genre);
    setStation(musicarray[newGenre][0]);
    showPlayer();
    playMusic();
});

// create the stations list from the music array
// iterates through the array and creates an H3 element for each station from each genre, and assigns a data-genre value for the
// H3 that corresponds. Also, creates an H2 title for each genre with the genre name.
for (i = 0; i < musicarray.length; i++) {
    var genreName = ('<h2 class="genre-names">' + musicarray[i][0].genre + '</h2>'  );
    $("#stations").append(genreName);
    for (j = 0; j < 6; j++) {
        var text = ('<h3 class="station-triggers" data-genre="' + i + '" data-station="' + j + '"  >' + musicarray[i][j].info + "</h3>");
        $("#stations").append(text);
    }

}
// Click function for the H3 elements - grabs the data-station value and sets the station accordingly and runs the playMusic function
$(".station-triggers").click(function (e) {
    var newGenre = this.getAttribute("data-genre");
    var newStation = this.getAttribute("data-station");
    console.log("Station Changed to " + musicarray[newGenre][newStation].info);
    setStation(musicarray[newGenre][newStation]);
    showPlayer();
    playMusic();
});
// volume functions
$("#volume-slider").mouseup(function(){
    currentAudio.volume = ($("#volume-slider")[0].value / 100);
});
$("#volume-slider").click(function(){
    currentAudio.volume = ($("#volume-slider")[0].value / 100);
});
$("#volume-slider").on("change",function(){
    currentAudio.volume = ($("#volume-slider")[0].value / 100);
});

//Cookies!!! first... define the cookie functions
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//on page load - load the cookie if it exists, if not create it, if it's broken catch the error, and overwrite it with a fresh cookie.
try {
    cookie = getCookie("favorites");
    if (!!cookie){
        favorites = JSON.parse(cookie);
        makeFavorites();
        console.log("Favorite Stations Loaded");
    } else {
        favorites = [];
        alert("Hello! Your favorites list has been cleared OR you don't have any favorite stations yet. This app uses cookies to store your favorite stations, we do not collect any personal data with cookies.");
    }
} catch (e){
    console.log(e);
    alert("Something happened. Your favorites list could not be loaded, sorry. I will fix it for you.");
    favorites = [];
    var save = undefined;
    setCookie("favorites", save, -100);
    console.log("cleared favorites");
    setTimeout(window.location.reload(), 300);
}
// click function for the star button - adds the current station from the player object into the favorites array, and then saves the cookie.
$("#add-fav").click(function(){
    if (favorites.length <30){
        var save = undefined;
        favorites.push(player.station);
        save = JSON.stringify(favorites);
        setCookie("favorites", save, 365);
        cookie = getCookie("favorites");
        alert(player.station.info + " saved in your favorites list");
        setTimeout(window.location.reload(), 100);
    } else {
        alert("Sorry, Only 30 Favorites can be saved.");
    }
});
// click function that deletes the favorites list and reloads the display
$("#clear").click(function(){
    favorites = [];
    var save = undefined;
    setCookie("favorites", save, -100);
    console.log("cleared favorites");
    setTimeout(window.location.reload(), 300);
});
